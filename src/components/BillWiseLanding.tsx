import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowRight, TrendingDown, ChevronDown, MessageCircle } from 'lucide-react';
import TestimonialsCarousel from './TestimonialsCarousel';

// Main Container - Full width
const LandingContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

// Hero Section - Full width
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 90vh;
    padding: 20px 0;
  }
`;

// Hero Background - Full width
const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const FloatingIcon = styled.div<{ top: string; left: string; animationDelay: string }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  font-size: 2rem;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
  animation-delay: ${props => props.animationDelay};
  z-index: 2;

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }
`;

const FloatingIconRight = styled.div<{ top: string; right: string; animationDelay: string }>`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  font-size: 2rem;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
  animation-delay: ${props => props.animationDelay};
  z-index: 2;

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }
`;

// Hero Content - Full width with proper centering
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 40px 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

// Floating Action Button
const FloatingActionButton = styled.button<{ isVisible: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #28A745 0%, #20C997 100%);
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0.8)'};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(40, 167, 69, 0.6);
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
`;

// Scroll Indicator
const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  z-index: 2;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }
`;

// Enhanced Hero Title with typing effect
const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: white;
  position: relative;
  
  &::after {
    content: '|';
    animation: blink 1s infinite;
    margin-left: 4px;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Language Cards Grid - Full width responsive
const LanguageCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 15px;
    margin: 30px auto 0;
  }
`;

// Language Card - Full width within grid
const LanguageCard = styled.div<{ isHovered: boolean }>`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 16px;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
  }
`;

const LanguageFlag = styled.div`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const LanguageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 16px;
`;

const LanguageDescription = styled.p`
  font-size: 1rem;
  color: #5D6D7E;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const LanguageCTA = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
`;

// Fast Track Section - Full width
const FastTrackSection = styled.section`
  padding: 80px 20px;
  background: white;
  text-align: center;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 60px 15px;
    background: #F8F9FA;
  }
`;

// Fast Track Container - Full width
const FastTrackContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

const FastTrackTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
    line-height: 1.3;
  }
`;

const FastTrackCTA = styled.a`
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  border: none;
  padding: 20px 40px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
  @media (max-width: 768px) {
    padding: 16px 30px;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 107, 53, 0.4);
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s;
  }

  &:hover::before {
    left: 100%;
  }
`;

// Testimonials Section - Full width
const TestimonialsSection = styled.section`
  padding: 80px 20px;
  background: #F8F9FA;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

// Testimonials Container - Full width
const TestimonialsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    line-height: 1.3;
  }
`;





// Testimonials data - 9 examples including new ones
const testimonials = [
  {
    flag: "🇵🇱",
    origin: "Polonia",
    content: "Doctoralia colleague from Poland saved 400€/year after a 15min call and a personalized document.",
    savings: "400€/año"
  },
  {
    flag: "🇮🇹",
    origin: "Italia",
    content: "Italian friend reduced bill by 25% by switching provider.",
    savings: "25% reducción"
  },
  {
    flag: "🇧🇷",
    origin: "Brasil",
    content: "Brazilian customer saved 500€/year by changing potencia.",
    savings: "500€/año"
  },
  {
    flag: "🇪🇸",
    origin: "España",
    content: "Spanish family reduced electricity bill by 30% after understanding their consumption patterns.",
    savings: "30% reducción"
  },
  {
    flag: "🇦🇷",
    origin: "Argentina",
    content: "Argentinian expat saved 200€/month by optimizing their energy contract.",
    savings: "200€/mes"
  },
  {
    flag: "🇬🇧",
    origin: "UK",
    content: "British colleague discovered hidden fees and saved 350€/year.",
    savings: "350€/año"
  },
  {
    flag: "🇦🇷",
    origin: "Argentina",
    content: "Now it's much easier to understand my bills! Loved the 50€ discount on my next bill after the changes.",
    savings: "50€ descuento"
  },
  {
    flag: "🇪🇸",
    origin: "España",
    content: "Finally I understand my electricity bill! The 50€ discount on my next bill was amazing after the changes.",
    savings: "50€ descuento"
  },
  {
    flag: "🇧🇷",
    origin: "Brasil",
    content: "Everything is so clear now! Got a 50€ discount on my next bill after implementing the recommendations.",
    savings: "50€ descuento"
  }
];

interface BillWiseLandingProps {
  onLanguageSelect: (language: 'spanish' | 'portuguese' | 'english') => void;
}

const BillWiseLanding: React.FC<BillWiseLandingProps> = ({ onLanguageSelect }) => {
  const [showFAB, setShowFAB] = useState(false);
  const [language, setLanguage] = useState<'spanish' | 'portuguese' | 'english'>('spanish');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowFAB(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSelect = (language: 'spanish' | 'portuguese' | 'english') => {
    setLanguage(language);
    onLanguageSelect(language);
  };

  const handleFABClick = () => {
    window.open('https://wa.me/+34671310850', '_blank');
  };

  const scrollToTestimonials = () => {
    const testimonialsSection = document.querySelector('[data-section="testimonials"]');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LandingContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroBackground />
        
        {/* Floating Icons */}
        <FloatingIcon top="10%" left="10%" animationDelay="0s">⚡</FloatingIcon>
        <FloatingIconRight top="20%" right="15%" animationDelay="1s">💸</FloatingIconRight>
        <FloatingIcon top="60%" left="5%" animationDelay="2s">⚡</FloatingIcon>
        <FloatingIconRight top="70%" right="10%" animationDelay="3s">💸</FloatingIconRight>
        <FloatingIcon top="40%" left="20%" animationDelay="4s">⚡</FloatingIcon>
        <FloatingIconRight top="30%" right="25%" animationDelay="5s">💸</FloatingIconRight>
        
        <HeroContent>
          <HeroTitle>BillWise</HeroTitle>
          <HeroSubtitle>
            ¿No sabes qué significa 'valle, punta, llano'? ¿También te sorprende cuánto pagas en tu factura de electricidad? 
            No te preocupes, no estás solo. +85% de los clientes de electricidad no saben cómo funciona o si están pagando un precio justo.
          </HeroSubtitle>
          
          <LanguageCardsGrid>
            <LanguageCard isHovered={false} onClick={() => handleLanguageSelect('portuguese')}>
              <LanguageFlag>🇧🇷</LanguageFlag>
              <LanguageTitle>Português</LanguageTitle>
              <LanguageDescription>
                Entenda sua fatura de eletricidade e água em português. 
                Economize dinheiro com nossa análise personalizada.
              </LanguageDescription>
              <LanguageCTA>
                Quero entender minha fatura agora
                <ArrowRight size={20} />
              </LanguageCTA>
            </LanguageCard>
            
            <LanguageCard isHovered={false} onClick={() => handleLanguageSelect('spanish')}>
              <LanguageFlag>🇪🇸</LanguageFlag>
              <LanguageTitle>Español</LanguageTitle>
              <LanguageDescription>
                Entiende tu factura de electricidad y agua en español. 
                Ahorra dinero con nuestro análisis personalizado.
              </LanguageDescription>
              <LanguageCTA>
                Quiero entender mi factura ahora
                <ArrowRight size={20} />
              </LanguageCTA>
            </LanguageCard>
            
            <LanguageCard isHovered={false} onClick={() => handleLanguageSelect('english')}>
              <LanguageFlag>🇬🇧</LanguageFlag>
              <LanguageTitle>English</LanguageTitle>
              <LanguageDescription>
                Understand your electricity and water bill in English. 
                Save money with our personalized analysis.
              </LanguageDescription>
              <LanguageCTA>
                I want to understand my bill now
                <ArrowRight size={20} />
              </LanguageCTA>
            </LanguageCard>
          </LanguageCardsGrid>
        </HeroContent>

        {/* Scroll Indicator */}
        <ScrollIndicator onClick={scrollToTestimonials}>
          <ChevronDown size={24} />
        </ScrollIndicator>
      </HeroSection>

      {/* Fast Track Section */}
      <FastTrackSection>
        <FastTrackContainer>
          <FastTrackTitle>¿No tienes tiempo? Solo quieres 50-80€ de descuento</FastTrackTitle>
          <FastTrackCTA href="https://share.octopusenergy.es/jolly-gull-677" target="_blank" rel="noopener noreferrer">
            <TrendingDown size={24} />
            Cambiar al mejor proveedor ahora
            <ArrowRight size={24} />
          </FastTrackCTA>
        </FastTrackContainer>
      </FastTrackSection>

      {/* Testimonials Section */}
      <TestimonialsSection data-section="testimonials">
        <TestimonialsContainer>
          <TestimonialsTitle>Resultados reales de personas alrededor del mundo</TestimonialsTitle>
          <TestimonialsCarousel testimonials={testimonials} />
        </TestimonialsContainer>
      </TestimonialsSection>

      {/* Investment Section */}
      <FastTrackSection>
        <FastTrackContainer>
          <FastTrackTitle>
            {language === 'spanish' && 'Inversión de 15€ para aprender todo'}
            {language === 'portuguese' && 'Investimento de 15€ para aprender tudo'}
            {language === 'english' && 'Investment of 15€ to learn everything'}
          </FastTrackTitle>
          <FastTrackCTA onClick={() => window.open('https://wa.me/+34671310850', '_blank')}>
            <TrendingDown size={24} />
            {language === 'spanish' && 'Agendar reunión'}
            {language === 'portuguese' && 'Agendar reunião'}
            {language === 'english' && 'Schedule meeting'}
            <ArrowRight size={24} />
          </FastTrackCTA>
        </FastTrackContainer>
      </FastTrackSection>

      {/* Floating Action Button */}
      <FloatingActionButton isVisible={showFAB} onClick={handleFABClick}>
        <MessageCircle size={24} />
      </FloatingActionButton>
    </LandingContainer>
  );
};

export default BillWiseLanding;
