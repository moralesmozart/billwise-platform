import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

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
  transform: translateX(-${props => props.currentIndex * 33.333}%);
  width: 300%;
  
  @media (max-width: 768px) {
    transform: translateX(-${props => props.currentIndex * 100}%);
    width: 600%;
  }
`;

const CarouselSlide = styled.div`
  width: 33.333%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px 25px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const TestimonialFlag = styled.span`
  font-size: 1.5rem;
`;

const TestimonialOrigin = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #2C3E50;
  margin: 0;
`;

const TestimonialContent = styled.p`
  color: #5D6D7E;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const TestimonialSavings = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #28A745;
  font-weight: 600;
  font-size: 0.9rem;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

const NavButton = styled.button<{ disabled?: boolean }>`
  background: ${props => props.disabled ? '#E8E8E8' : '#667eea'};
  color: ${props => props.disabled ? '#999' : 'white'};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: #5a6fd8;
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 0 20px;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#667eea' : '#E8E8E8'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#5a6fd8' : '#D0D0D0'};
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
              <CheckCircle size={16} />
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
              <TestimonialCard key={index} style={{ marginBottom: index < 2 ? '20px' : '0' }}>
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
      
      <NavigationContainer>
        <NavButton onClick={prevSlide} disabled={currentIndex === 0}>
          <ChevronLeft size={24} />
        </NavButton>
        
        <DotsContainer>
          {Array.from({ length: totalSlides }, (_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
        
        <NavButton onClick={nextSlide} disabled={currentIndex === totalSlides - 1}>
          <ChevronRight size={24} />
        </NavButton>
      </NavigationContainer>
    </CarouselContainer>
  );
};

export default TestimonialsCarousel;
