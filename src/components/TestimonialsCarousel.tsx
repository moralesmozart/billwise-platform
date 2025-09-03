import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CheckCircle } from 'lucide-react';

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
  margin-bottom: 16px;
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

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

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
    </TestimonialsContainer>
  );
};

export default TestimonialsCarousel;
