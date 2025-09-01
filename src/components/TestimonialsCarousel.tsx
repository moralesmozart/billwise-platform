import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, Star, CheckCircle } from 'lucide-react';

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
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 40px;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

// Left Column - Overall Rating
const RatingColumn = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  color: white;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const RatingTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 16px;
`;

const StarIcon = styled(Star)`
  color: #28A745;
  fill: #28A745;
  width: 24px;
  height: 24px;
`;

const ReviewCount = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  opacity: 0.9;
`;

const TrustedBadge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 20px;
  
  p {
    color: #667eea;
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const TrustpilotLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  
  .star {
    color: #28A745;
  }
`;

// Right Column - Testimonials
const TestimonialsColumn = styled.div`
  position: relative;
  overflow: hidden;
`;

const TestimonialsTrack = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.currentIndex * 100}%);
  width: 200%;
  
  @media (max-width: 768px) {
    width: 400%;
  }
`;

const TestimonialsSlide = styled.div`
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
        <TestimonialsSlide key={index}>
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
        </TestimonialsSlide>
      ));
    } else {
      // Desktop: show 3 testimonials per slide
      const slides = [];
      for (let i = 0; i < testimonials.length; i += 3) {
        const slideTestimonials = testimonials.slice(i, i + 3);
        slides.push(
          <TestimonialsSlide key={i}>
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
          </TestimonialsSlide>
        );
      }
      return slides;
    }
  };
  
  return (
    <CarouselContainer>
      {/* Left Column - Rating */}
      <RatingColumn>
        <RatingTitle>Excelente</RatingTitle>
        <StarRating>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </StarRating>
        <ReviewCount>Basado en 6,680 reseñas</ReviewCount>
        <TrustedBadge>
          <p>El proveedor de energía más confiable de España</p>
        </TrustedBadge>
        <TrustpilotLogo>
          <span className="star">★</span>
          Trustpilot
        </TrustpilotLogo>
      </RatingColumn>
      
      {/* Right Column - Testimonials */}
      <TestimonialsColumn>
        <TestimonialsTrack currentIndex={currentIndex}>
          {renderTestimonials()}
        </TestimonialsTrack>
        
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
      </TestimonialsColumn>
    </CarouselContainer>
  );
};

export default TestimonialsCarousel;
