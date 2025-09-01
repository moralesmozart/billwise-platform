import React from 'react';
import styled from 'styled-components';
import { ArrowLeft, Calendar, Users, TrendingDown, CheckCircle, Zap, Clock, Calculator, Target } from 'lucide-react';

interface BillWiseExplanationProps {
  language: 'spanish' | 'portuguese' | 'english';
  onBack: () => void;
}

// Styled Components
const ExplanationContainer = styled.div`
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
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
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProblemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProblemItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 1.1rem;
  line-height: 1.6;
  
  &:before {
    content: '❌';
    font-size: 1.2rem;
  }
`;

const SolutionSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
`;

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 2rem;
`;

const SolutionCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  
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

const ChartSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
`;

const ChartContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  margin-top: 2rem;
  color: #2C3E50;
`;

const ChartTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: #2C3E50;
`;

const ChartDescription = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: #5D6D7E;
`;

const ChartImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #6c757d;
  border: 2px dashed #dee2e6;
`;

const MeetingSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  text-align: center;
`;

const MeetingCTA = styled.button`
  background: linear-gradient(135deg, #28A745 0%, #20C997 100%);
  color: white;
  border: none;
  padding: 20px 40px;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 2rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(40, 167, 69, 0.4);
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  line-height: 1.6;
  
  &:before {
    content: '✅';
    font-size: 1.2rem;
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
        },
        {
          icon: "🏠",
          title: "Cambio de Proveedor",
          description: "Te ayudamos a encontrar la mejor tarifa para tu consumo"
        }
      ]
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
      cta: "Agendar Reunión Gratuita"
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
        },
        {
          icon: "🏠",
          title: "Mudança de Fornecedor",
          description: "Ajudamos a encontrar a melhor tarifa para seu consumo"
        }
      ]
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
      cta: "Agendar Reunião Gratuita"
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
        },
        {
          icon: "🏠",
          title: "Provider Change",
          description: "We help you find the best rate for your consumption"
        }
      ]
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
      cta: "Schedule Free Meeting"
    }
  }
};

const BillWiseExplanation: React.FC<BillWiseExplanationProps> = ({ language, onBack }) => {
  const content = languageContent[language];

  const handleMeetingCTA = () => {
    // Aquí puedes implementar la lógica para agendar la reunión
    alert(`¡Perfecto! Te contactaremos pronto para agendar tu reunión personalizada en ${language === 'spanish' ? 'español' : language === 'portuguese' ? 'portugués' : 'inglés'}.`);
  };

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
          <ProblemList>
            {content.problem.items.map((item, index) => (
              <ProblemItem key={index}>{item}</ProblemItem>
            ))}
          </ProblemList>
        </ProblemSection>

        {/* Solution Section */}
        <SolutionSection>
          <SectionTitle>
            <CheckCircle size={32} />
            {content.solution.title}
          </SectionTitle>
          <SolutionGrid>
            {content.solution.items.map((item, index) => (
              <SolutionCard key={index}>
                <SolutionIcon>{item.icon}</SolutionIcon>
                <SolutionTitle>{item.title}</SolutionTitle>
                <SolutionDescription>{item.description}</SolutionDescription>
              </SolutionCard>
            ))}
          </SolutionGrid>
        </SolutionSection>

        {/* Chart Section */}
        <ChartSection>
          <SectionTitle>
            <Calculator size={32} />
            {content.chart.title}
          </SectionTitle>
          <ChartContainer>
            <ChartTitle>Análisis de Factura y Ahorros</ChartTitle>
            <ChartDescription>
              {content.chart.description}
            </ChartDescription>
            <ChartImage>
              📊 Gráfico de análisis de costos y ahorros potenciales
              <br />
              (Similar al mostrado en la imagen de referencia)
            </ChartImage>
          </ChartContainer>
        </ChartSection>

        {/* Meeting Section */}
        <MeetingSection>
          <SectionTitle>
            <Users size={32} />
            {content.meeting.title}
          </SectionTitle>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            {content.meeting.description}
          </p>
          <BenefitsList>
            {content.meeting.benefits.map((benefit, index) => (
              <BenefitItem key={index}>{benefit}</BenefitItem>
            ))}
          </BenefitsList>
          <MeetingCTA onClick={handleMeetingCTA}>
            <Calendar size={24} />
            {content.meeting.cta}
          </MeetingCTA>
        </MeetingSection>
      </Content>
    </ExplanationContainer>
  );
};

export default BillWiseExplanation;
