import React from 'react';
import styled from 'styled-components';
import { CheckCircle, Calendar } from 'lucide-react';

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
const TestimonialsGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
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
  return (
    <>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
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
      </TestimonialsGrid>
      
      {/* CTA Button */}
      <CTAContainer>
        <CTAButton onClick={() => window.open('https://wa.me/+34671310850', '_blank')}>
          <Calendar size={24} />
          Schedule Free Meeting
        </CTAButton>
      </CTAContainer>
    </>
  );
};

export default TestimonialsCarousel;
