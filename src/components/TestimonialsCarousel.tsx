import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, CheckCircle, Calendar } from 'lucide-react';

interface Testimonial {
  flag: string;
  origin: string;
  content: string;
  savings: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const CarouselTrack = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.currentIndex * 100}%);
  width: 200%;
  
  @media (max-width: 768px) {
    width: 400%;
  }
`;

const CarouselSlide = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    width: 25%;
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const TestimonialFlag = styled.span`
  font-size: 1.2rem;
`;

const TestimonialOrigin = styled.h4`
  font-size: 0.9rem;
  font-weight: 700;
  color: #2C3E50;
  margin: 0;
`;

const TestimonialContent = styled.p`
  color: #5D6D7E;
  line-height: 1.5;
  margin-bottom: 16px;
  font-size: 0.85rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TestimonialSavings = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #28A745;
  font-weight: 600;
  font-size: 0.8rem;
`;

// Navigation
const NavigationContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
  
  @media (max-width: 768px) {
    top: auto;
    bottom: -40px;
    transform: none;
    pointer-events: all;
  }
`;

const NavButton = styled.button<{ disabled?: boolean; position: 'left' | 'right' }>`
  background: ${props => props.disabled ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.disabled ? 'rgba(255, 255, 255, 0.5)' : '#667eea'};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  pointer-events: all;
  
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
  }
  
  @media (max-width: 768px) {
    position: ${props => props.position === 'left' ? 'static' : 'static'};
    transform: none;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#667eea' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#5a6fd8' : 'rgba(255, 255, 255, 0.5)'};
  }
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 0 20px;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 0.9rem;
  }
`;

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate total slides based on screen size
  const isMobile = window.innerWidth <= 768;
  const totalSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);
  
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  const renderTestimonials = () => {
    if (isMobile) {
      // Mobile: show 1 testimonial per slide
      return testimonials.map((testimonial, index) => (
        <CarouselSlide key={index}>
          <TestimonialCard>
            <TestimonialHeader>
              <TestimonialFlag>{testimonial.flag}</TestimonialFlag>
              <TestimonialOrigin>{testimonial.origin}</TestimonialOrigin>
            </TestimonialHeader>
            <TestimonialContent>{testimonial.content}</TestimonialContent>
            <TestimonialSavings>
              <CheckCircle size={14} />
              {testimonial.savings}
            </TestimonialSavings>
          </TestimonialCard>
        </CarouselSlide>
      ));
    } else {
      // Desktop: show 3 testimonials per slide
      const slides = [];
      for (let i = 0; i < testimonials.length; i += 3) {
        const slideTestimonials = testimonials.slice(i, i + 3);
        slides.push(
          <CarouselSlide key={i}>
            {slideTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <TestimonialHeader>
                  <TestimonialFlag>{testimonial.flag}</TestimonialFlag>
                  <TestimonialOrigin>{testimonial.origin}</TestimonialOrigin>
                </TestimonialHeader>
                <TestimonialContent>{testimonial.content}</TestimonialContent>
                <TestimonialSavings>
                  <CheckCircle size={14} />
                  {testimonial.savings}
                </TestimonialSavings>
              </TestimonialCard>
            ))}
          </CarouselSlide>
        );
      }
      return slides;
    }
  };
  
  return (
    <CarouselContainer>
      <CarouselTrack currentIndex={currentIndex}>
        {renderTestimonials()}
      </CarouselTrack>
      
      {/* Navigation */}
      <NavigationContainer>
        <NavButton 
          onClick={prevSlide} 
          disabled={currentIndex === 0}
          position="left"
        >
          <ChevronLeft size={20} />
        </NavButton>
        
        <NavButton 
          onClick={nextSlide} 
          disabled={currentIndex === totalSlides - 1}
          position="right"
        >
          <ChevronRight size={20} />
        </NavButton>
      </NavigationContainer>
      
      {/* Dots */}
      <DotsContainer>
        {Array.from({ length: totalSlides }, (_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
      
      {/* CTA Button */}
      <CTAContainer>
        <CTAButton onClick={() => window.open('https://calendly.com/your-link', '_blank')}>
          <Calendar size={24} />
          Schedule Free Meeting
        </CTAButton>
      </CTAContainer>
    </CarouselContainer>
  );
};

export default TestimonialsCarousel;
