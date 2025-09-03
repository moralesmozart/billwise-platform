import React from 'react';
import styled from 'styled-components';
import { ArrowLeft, Users, CheckCircle, Target, TrendingUp, Zap, Shield, BarChart3, TrendingDown, ArrowRight } from 'lucide-react';

interface BillWiseExplanationProps {
  language: 'spanish' | 'portuguese' | 'english';
  onBack: () => void;
}

// Enhanced Styled Components
const ExplanationContainer = styled.div`
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 40px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(102, 126, 234, 0.1);
  backdrop-filter: blur(10px);
  padding: 16px 20px;
  border-radius: 16px;
  margin: -20px -20px 40px -20px;
`;

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  animation: fadeInUp 0.8s ease;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProblemSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease 0.2s both;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const ProblemCard = styled.div<{ index: number }>`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease ${props => 0.4 + props.index * 0.1}s both;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const ProblemCardIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: white;
  font-size: 1.5rem;
`;

const ProblemCardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: white;
`;

const ProblemCardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`;

const SolutionSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease 0.4s both;
`;

// Solution Grid - 3 cards top row, 1 card bottom row
const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 2rem;
  width: 100%;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

// Bottom Card - Takes full width
const BottomCard = styled.div`
  grid-column: 1 / -1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 32px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease 0.4s both;
`;

const BottomCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const BottomCardLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const SolutionCard = styled.div<{ index: number }>`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease ${props => 0.6 + props.index * 0.1}s both;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SolutionIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: white;
  font-size: 1.5rem;
`;

const SolutionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const SolutionDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const MeetingSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  text-align: center;
  animation: fadeInUp 0.8s ease 1s both;
`;

const MeetingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 32px 0;
`;

const MeetingCard = styled.div<{ index: number }>`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  text-align: center;
  animation: fadeInUp 0.6s ease ${props => 1.2 + props.index * 0.1}s both;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const MeetingCardIcon = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #28A745 0%, #20C997 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: white;
  font-size: 1.8rem;
`;

const MeetingCardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: white;
`;

const MeetingCardDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`;

// Investment Section
const InvestmentSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-top: 40px;
  backdrop-filter: blur(10px);
  text-align: center;
  animation: fadeInUp 0.8s ease 1.2s both;
`;

const InvestmentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const InvestmentTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
  animation: fadeInUp 0.8s ease 1.2s both;
`;

const InvestmentCTA = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 16px 32px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

// Language-specific content
const languageContent = {
  spanish: {
    title: "¿Por qué las personas en España no entienden sus facturas?",
    problem: {
      title: "El Problema Real",
      items: [
        "85% de los clientes no saben qué significa 'valle', 'punta', 'llano'",
        "No entienden por qué pagan tanto en su factura mensual",
        "No saben identificar oportunidades de ahorro",
        "No conocen las mejores tarifas disponibles",
        "No entienden los conceptos de su factura"
      ]
    },
    solution: {
      title: "Nuestra Solución",
      items: [
        {
          icon: "📊",
          title: "Análisis Personalizado",
          description: "Revisamos tu factura línea por línea y te explicamos cada concepto"
        },
        {
          icon: "💰",
          title: "Identificación de Ahorros",
          description: "Encontramos oportunidades específicas para reducir tus costos"
        },
        {
          icon: "⚡",
          title: "Optimización de Consumo",
          description: "Te enseñamos cuándo usar más energía para pagar menos"
        }
      ],
      bottomCard: {
        title: "Análisis Personalizado Completo",
        description: "Recibe un análisis detallado con recomendaciones específicas para tu caso",
        cta: "Quiero entender mi factura ahora"
      }
    },
    chart: {
      title: "Análisis de Costos y Ahorros",
      description: "Recibirás un análisis detallado con gráficos como este, mostrando tus costos actuales vs. potenciales ahorros"
    },
    meeting: {
      title: "Reunión Online Personalizada (15-30 min)",
      description: "Agenda una sesión individual donde te explicaremos:",
      benefits: [
        "Análisis completo de tu factura actual",
        "Planilla detallada con todos los costos",
        "Opciones de optimización disponibles",
        "Cálculo exacto de ahorro anual",
        "Recomendaciones específicas para tu caso"
      ],
      cta: "Agendar Reunión"
    }
  },
  portuguese: {
    title: "Por que as pessoas na Espanha não entendem suas faturas?",
    problem: {
      title: "O Problema Real",
      items: [
        "85% dos clientes não sabem o que significa 'valle', 'punta', 'llano'",
        "Não entendem por que pagam tanto na fatura mensal",
        "Não sabem identificar oportunidades de economia",
        "Não conhecem as melhores tarifas disponíveis",
        "Não entendem os conceitos da sua fatura"
      ]
    },
    solution: {
      title: "Nossa Solução",
      items: [
        {
          icon: "📊",
          title: "Análise Personalizada",
          description: "Revisamos sua fatura linha por linha e explicamos cada conceito"
        },
        {
          icon: "💰",
          title: "Identificação de Economias",
          description: "Encontramos oportunidades específicas para reduzir seus custos"
        },
        {
          icon: "⚡",
          title: "Otimização de Consumo",
          description: "Ensinamos quando usar mais energia para pagar menos"
        }
      ],
      bottomCard: {
        title: "Análise Personalizada Completa",
        description: "Receba uma análise detalhada com recomendações específicas para seu caso",
        cta: "Quero entender minha fatura agora"
      }
    },
    chart: {
      title: "Análise de Custos e Economias",
      description: "Receberá uma análise detalhada com gráficos como este, mostrando seus custos atuais vs. economias potenciais"
    },
    meeting: {
      title: "Reunião Online Personalizada (15-30 min)",
      description: "Agende uma sessão individual onde explicaremos:",
      benefits: [
        "Análise completa da sua fatura atual",
        "Planilha detalhada com todos os custos",
        "Opções de otimização disponíveis",
        "Cálculo exato de economia anual",
        "Recomendações específicas para seu caso"
      ],
      cta: "Agendar Reunião"
    }
  },
  english: {
    title: "Why don't people in Spain understand their bills?",
    problem: {
      title: "The Real Problem",
      items: [
        "85% of customers don't know what 'valle', 'punta', 'llano' means",
        "They don't understand why they pay so much monthly",
        "They can't identify savings opportunities",
        "They don't know the best available rates",
        "They don't understand bill concepts"
      ]
    },
    solution: {
      title: "Our Solution",
      items: [
        {
          icon: "📊",
          title: "Personalized Analysis",
          description: "We review your bill line by line and explain each concept"
        },
        {
          icon: "💰",
          title: "Savings Identification",
          description: "We find specific opportunities to reduce your costs"
        },
        {
          icon: "⚡",
          title: "Consumption Optimization",
          description: "We teach you when to use more energy to pay less"
        }
      ],
      bottomCard: {
        title: "Complete Personalized Analysis",
        description: "Receive a detailed analysis with specific recommendations for your case",
        cta: "I want to understand my bill now"
      }
    },
    chart: {
      title: "Cost Analysis and Savings",
      description: "You'll receive a detailed analysis with charts like this, showing your current costs vs. potential savings"
    },
    meeting: {
      title: "Personalized Online Meeting (15-30 min)",
      description: "Schedule an individual session where we'll explain:",
      benefits: [
        "Complete analysis of your current bill",
        "Detailed spreadsheet with all costs",
        "Available optimization options",
        "Exact annual savings calculation",
        "Specific recommendations for your case"
      ],
      cta: "Schedule Meeting"
    }
  }
};

const BillWiseExplanation: React.FC<BillWiseExplanationProps> = ({ language, onBack }) => {
  const content = languageContent[language];

  return (
    <ExplanationContainer>
      <Header>
        <BackButton onClick={onBack}>
          <ArrowLeft size={20} />
          Volver
        </BackButton>
      </Header>

      <Content>
        <Title>{content.title}</Title>

        {/* Problem Section */}
        <ProblemSection>
          <SectionTitle>
            <Target size={32} />
            {content.problem.title}
          </SectionTitle>
          <ProblemGrid>
            {content.problem.items.map((item, index) => (
              <ProblemCard key={index} index={index}>
                <ProblemCardIcon>
                  {index === 0 && <BarChart3 size={24} />}
                  {index === 1 && <TrendingUp size={24} />}
                  {index === 2 && <Zap size={24} />}
                  {index === 3 && <Shield size={24} />}
                  {index === 4 && <Target size={24} />}
                </ProblemCardIcon>
                <ProblemCardTitle>
                  {index === 0 && 'Confusión en Terminología'}
                  {index === 1 && 'Costos Inesperados'}
                  {index === 2 && 'Oportunidades Perdidas'}
                  {index === 3 && 'Tarifas Desconocidas'}
                  {index === 4 && 'Conceptos Incomprensibles'}
                </ProblemCardTitle>
                <ProblemCardDescription>{item}</ProblemCardDescription>
              </ProblemCard>
            ))}
          </ProblemGrid>
        </ProblemSection>

        {/* Solution Section */}
        <SolutionSection>
          <SectionTitle>
            <CheckCircle size={32} />
            {content.solution.title}
          </SectionTitle>
          <SolutionGrid>
            {content.solution.items.map((item, index) => (
              <SolutionCard key={index} index={index}>
                <SolutionIcon>{item.icon}</SolutionIcon>
                <SolutionTitle>{item.title}</SolutionTitle>
                <SolutionDescription>{item.description}</SolutionDescription>
              </SolutionCard>
            ))}
            
            {/* Bottom Card - Full Width */}
            <BottomCard>
              <BottomCardContent>
                <BottomCardLeft>
                  <SolutionIcon>🎯</SolutionIcon>
                  <div>
                    <SolutionTitle>
                      {content.solution.bottomCard?.title || 'Análisis Personalizado Completo'}
                    </SolutionTitle>
                    <SolutionDescription style={{ textAlign: 'left' }}>
                      {content.solution.bottomCard?.description || 'Recibe un análisis detallado con recomendaciones específicas para tu caso'}
                    </SolutionDescription>
                  </div>
                </BottomCardLeft>
              </BottomCardContent>
            </BottomCard>
          </SolutionGrid>
        </SolutionSection>

        {/* Meeting Section */}
        <MeetingSection>
          <SectionTitle>
            <Users size={32} />
            {content.meeting.title}
          </SectionTitle>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            {content.meeting.description}
          </p>
          
          {/* Pricing Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            padding: '24px',
            margin: '32px auto',
            maxWidth: '400px',
            textAlign: 'center',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#FFD700',
              marginBottom: '8px'
            }}>
              💰
            </div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '8px'
            }}>
              {language === 'spanish' && 'Inversión 15 euros para aprender sobre ello'}
              {language === 'portuguese' && 'Investimento 15 euros para aprender sobre isso'}
              {language === 'english' && 'Investment 15 euros to learn about it'}
            </div>
            <div style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.5'
            }}>
              {language === 'spanish' && 'Pequeña inversión para grandes ahorros'}
              {language === 'portuguese' && 'Pequeno investimento para grandes economias'}
              {language === 'english' && 'Small investment for big savings'}
            </div>
          </div>
          
          <MeetingGrid>
            {content.meeting.benefits.map((benefit, index) => (
              <MeetingCard key={index} index={index}>
                <MeetingCardIcon>
                  {index === 0 && <BarChart3 size={24} />}
                  {index === 1 && <TrendingUp size={24} />}
                  {index === 2 && <Zap size={24} />}
                  {index === 3 && <Shield size={24} />}
                  {index === 4 && <Target size={24} />}
                </MeetingCardIcon>
                <MeetingCardTitle>
                  {index === 0 && 'Análisis Completo'}
                  {index === 1 && 'Planilla Detallada'}
                  {index === 2 && 'Opciones de Optimización'}
                  {index === 3 && 'Cálculo de Ahorros'}
                  {index === 4 && 'Recomendaciones Específicas'}
                </MeetingCardTitle>
                <MeetingCardDescription>{benefit}</MeetingCardDescription>
              </MeetingCard>
            ))}
          </MeetingGrid>
        </MeetingSection>

        {/* Investment Section */}
        <InvestmentSection>
          <InvestmentContainer>
            <InvestmentTitle>
              {language === 'spanish' && 'Inversión de 15€ para aprender todo'}
              {language === 'portuguese' && 'Investimento de 15€ para aprender tudo'}
              {language === 'english' && 'Investment of 15€ to learn everything'}
            </InvestmentTitle>
            <InvestmentCTA onClick={() => window.open('https://wa.me/+34671310850', '_blank')}>
              <TrendingDown size={24} />
              {language === 'spanish' && 'Agendar reunión'}
              {language === 'portuguese' && 'Agendar reunião'}
              {language === 'english' && 'Schedule meeting'}
              <ArrowRight size={24} />
            </InvestmentCTA>
          </InvestmentContainer>
        </InvestmentSection>
      </Content>
    </ExplanationContainer>
  );
};

export default BillWiseExplanation;
