import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CheckCircle, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  flag: string;
  origin: string;
  content: string;
  savings: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

// Enhanced Styled Components
const TestimonialsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const TestimonialsGrid = styled.div<{ currentSlide: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  transition: transform 0.5s ease;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    transform: translateX(${props => props.currentSlide * -100}%);
  }
`;

const MobileTestimonialsWrapper = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    overflow: hidden;
    width: 100%;
  }
`;

const DesktopTestimonialsWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const TestimonialCard = styled.div<{ isActive?: boolean }>`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: all 0.4s ease;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(102, 126, 234, 0.2);
  }
  
  ${props => props.isActive && `
    border-color: #667eea;
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.2);
  `}
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const TestimonialFlag = styled.span`
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
`;

const TestimonialOrigin = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #2C3E50;
  margin: 0;
`;

const TestimonialContent = styled.p`
  color: #5D6D7E;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TestimonialSavings = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #28A745;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 8px 12px;
  background: rgba(40, 167, 69, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(40, 167, 69, 0.2);
`;

// Navigation Controls
const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const NavButton = styled.button<{ disabled?: boolean }>`
  background: ${props => props.disabled ? '#E0E0E0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

const ProgressIndicator = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ProgressDot = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#667eea' : '#E0E0E0'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const SlideCounter = styled.span`
  font-size: 0.9rem;
  color: #5D6D7E;
  font-weight: 600;
  min-width: 60px;
  text-align: center;
`;

// CTA Section
const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 0 20px;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 18px 36px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1rem;
  }
`;

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    // Auto-advance slides every 5 seconds on mobile
    if (window.innerWidth <= 768) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const handleMeetingCTA = () => {
    window.open('https://wa.me/+34671310850', '_blank');
  };

  // Split testimonials into groups of 3 for mobile
  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialGroups.push(testimonials.slice(i, i + 3));
  }

  return (
    <TestimonialsContainer>
      {/* Desktop View */}
      <DesktopTestimonialsWrapper>
        <TestimonialsGrid currentSlide={0}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} isActive={index < 3}>
              <TestimonialHeader>
                <TestimonialFlag>{testimonial.flag}</TestimonialFlag>
                <TestimonialOrigin>{testimonial.origin}</TestimonialOrigin>
              </TestimonialHeader>
              <TestimonialContent>{testimonial.content}</TestimonialContent>
              <TestimonialSavings>
                <CheckCircle size={16} />
                {testimonial.savings}
              </TestimonialSavings>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </DesktopTestimonialsWrapper>

      {/* Mobile View */}
      <MobileTestimonialsWrapper>
        <TestimonialsGrid currentSlide={currentSlide}>
          {testimonialGroups[currentSlide]?.map((testimonial, index) => (
            <TestimonialCard key={index} isActive={true}>
              <TestimonialHeader>
                <TestimonialFlag>{testimonial.flag}</TestimonialFlag>
                <TestimonialOrigin>{testimonial.origin}</TestimonialOrigin>
              </TestimonialHeader>
              <TestimonialContent>{testimonial.content}</TestimonialContent>
              <TestimonialSavings>
                <CheckCircle size={16} />
                {testimonial.savings}
              </TestimonialSavings>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </MobileTestimonialsWrapper>

      {/* Navigation Controls */}
      <NavigationContainer>
        <NavButton onClick={prevSlide} disabled={currentSlide === 0}>
          <ChevronLeft size={20} />
        </NavButton>
        
        <ProgressIndicator>
          {Array.from({ length: totalSlides }, (_, index) => (
            <ProgressDot
              key={index}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </ProgressIndicator>
        
        <SlideCounter>
          {currentSlide + 1} / {totalSlides}
        </SlideCounter>
        
        <NavButton onClick={nextSlide} disabled={currentSlide === totalSlides - 1}>
          <ChevronRight size={20} />
        </NavButton>
      </NavigationContainer>
      
      {/* CTA Button */}
      <CTAContainer>
        <CTAButton onClick={handleMeetingCTA}>
          <Calendar size={24} />
          Schedule Free Meeting
        </CTAButton>
      </CTAContainer>
    </TestimonialsContainer>
  );
};

export default TestimonialsCarousel;
