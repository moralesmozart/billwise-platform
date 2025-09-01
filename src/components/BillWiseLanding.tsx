import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Upload, ArrowRight, TrendingDown, CheckCircle, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

// Styled Components
const LandingContainer = styled.div`
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

// Hero Section
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  z-index: 3;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: white;
  
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

const LanguageCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const LanguageCard = styled.div<{ isHovered: boolean }>`
  background: white;
  border-radius: 20px;
  padding: 32px 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
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

// Fast Track CTA Section
const FastTrackSection = styled.section`
  padding: 60px 20px;
  background: white;
  text-align: center;
  width: 100%;
`;

const FastTrackContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const FastTrackTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 24px;
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

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: 80px 20px;
  background: #F8F9FA;
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 3rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #667eea;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const TestimonialFlag = styled.div`
  font-size: 1.5rem;
`;

const TestimonialOrigin = styled.div`
  font-weight: 600;
  color: #667eea;
  font-size: 0.9rem;
`;

const TestimonialContent = styled.p`
  color: #5D6D7E;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const TestimonialSavings = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #27AE60;
  font-weight: 600;
  font-size: 0.9rem;
`;

// Form Section
const FormSection = styled.section`
  padding: 80px 20px;
  background: white;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormLabel = styled.label`
  font-weight: 600;
  color: #2C3E50;
  font-size: 1rem;
`;

const FormInput = styled.input`
  padding: 16px;
  border: 2px solid #E8E8E8;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  padding: 16px;
  border: 2px solid #E8E8E8;
  border-radius: 12px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 18px 32px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

// Image Upload Component
const ImageUploadContainer = styled.div`
  width: 100%;
`;

// Removed unused styled component

const DropzoneContainer = styled.div<{ isDragActive: boolean }>`
  border: 2px dashed ${props => props.isDragActive ? '#667eea' : '#E8E8E8'};
  border-radius: 12px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.isDragActive ? 'rgba(102, 126, 234, 0.05)' : '#F8F9FA'};
  
  &:hover {
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.05);
  }
`;

const DropzoneText = styled.div`
  color: #5D6D7E;
  margin-bottom: 16px;
`;

const UploadIcon = styled(Upload)`
  color: #667eea;
  margin-bottom: 16px;
`;

const ImagePreview = styled.div`
  position: relative;
  margin-top: 16px;
`;

const PreviewImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  border: 2px solid #E8E8E8;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #DC3545;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    background: #C82333;
  }
`;

// Testimonials data
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
    flag: "🇨🇱",
    origin: "Chile",
    content: "Chilean colleague discovered hidden fees and saved 350€/year.",
    savings: "350€/año"
  },
  {
    flag: "🇨🇴",
    origin: "Colombia",
    content: "Colombian friend reduced water bill by 40% after fixing leaks identified in the analysis.",
    savings: "40% reducción"
  },
  {
    flag: "🇵🇪",
    origin: "Perú",
    content: "Peruvian customer saved 280€/year by switching to a better energy plan.",
    savings: "280€/año"
  },
  {
    flag: "🇲🇽",
    origin: "México",
    content: "Mexican family reduced combined bills by 35% after comprehensive analysis.",
    savings: "35% reducción"
  },
  {
    flag: "🇺🇸",
    origin: "Estados Unidos",
    content: "American expat saved 600€/year by understanding Spanish energy market.",
    savings: "600€/año"
  },
  {
    flag: "🇬🇧",
    origin: "Reino Unido",
    content: "British colleague saved 450€/year by optimizing their energy consumption.",
    savings: "450€/año"
  },
  {
    flag: "🇫🇷",
    origin: "Francia",
    content: "French neighbor reduced bills by 28% after switching providers.",
    savings: "28% reducción"
  },
  {
    flag: "🇩🇪",
    origin: "Alemania",
    content: "German friend saved 380€/year by understanding their energy contract.",
    savings: "380€/año"
  },
  {
    flag: "🇵🇹",
    origin: "Portugal",
    content: "Portuguese colleague reduced electricity bill by 22% after analysis.",
    savings: "22% reducción"
  },
  {
    flag: "🇳🇱",
    origin: "Países Bajos",
    content: "Dutch expat saved 320€/year by optimizing their energy plan.",
    savings: "320€/año"
  },
  {
    flag: "🇧🇪",
    origin: "Bélgica",
    content: "Belgian customer reduced bills by 26% after switching providers.",
    savings: "26% reducción"
  },
  {
    flag: "🇨🇭",
    origin: "Suiza",
    content: "Swiss friend saved 420€/year by understanding their consumption.",
    savings: "420€/año"
  },
  {
    flag: "🇦🇹",
    origin: "Austria",
    content: "Austrian colleague reduced energy costs by 31% after analysis.",
    savings: "31% reducción"
  },
  {
    flag: "🇸🇪",
    origin: "Suecia",
    content: "Swedish customer saved 290€/year by optimizing their contract.",
    savings: "290€/año"
  },
  {
    flag: "🇳🇴",
    origin: "Noruega",
    content: "Norwegian friend reduced bills by 24% after switching providers.",
    savings: "24% reducción"
  },
  {
    flag: "🇩🇰",
    origin: "Dinamarca",
    content: "Danish expat saved 340€/year by understanding their energy plan.",
    savings: "340€/año"
  }
];

interface BillWiseLandingProps {
  onLanguageSelect: (language: 'spanish' | 'portuguese' | 'english') => void;
}

const BillWiseLanding: React.FC<BillWiseLandingProps> = ({ onLanguageSelect }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedImage, setUploadedImage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aquí normalmente enviarías los datos a tu backend
    console.log('Form submitted:', { ...formData, image: uploadedImage });
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    setUploadedImage('');
    alert('¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.');
  };

  const handleLanguageSelect = (language: 'spanish' | 'portuguese' | 'english') => {
    onLanguageSelect(language);
  };

  // Fast track now redirects directly to Octopus Energy
  // No need for handleFastTrack function

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    
    // Validar tipo de archivo
    if (!file.type.startsWith('image/')) {
      alert('Por favor, sube solo archivos de imagen (PNG, JPG, JPEG)');
      return;
    }

    // Validar tamaño (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('La imagen es demasiado grande. Máximo 5MB permitido.');
      return;
    }

    // Crear URL local temporal
    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result as string;
      setUploadedImage(imageUrl);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp']
    },
    multiple: false
  });

  const removeImage = () => {
    setUploadedImage('');
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
              <LanguageFlag>🇵🇹</LanguageFlag>
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
      <TestimonialsSection>
        <TestimonialsContainer>
          <TestimonialsTitle>Resultados reales de personas alrededor del mundo</TestimonialsTitle>
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
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
        </TestimonialsContainer>
      </TestimonialsSection>

      {/* Form Section */}
      <FormSection>
        <FormContainer>
          <FormTitle>Sube tu factura, te explicaremos todo</FormTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Nombre completo *</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Tu nombre completo"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email *</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="tu@email.com"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Mensaje (opcional)</FormLabel>
              <FormTextarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntanos más sobre tu situación o preguntas específicas..."
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Subir factura (PDF o imagen) *</FormLabel>
              <ImageUploadContainer>
                {!uploadedImage ? (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <DropzoneContainer isDragActive={isDragActive}>
                      <UploadIcon size={48} />
                      <DropzoneText>
                        {isDragActive
                          ? 'Suelta la imagen aquí...'
                          : 'Arrastra y suelta una imagen, o haz clic para seleccionar'
                        }
                      </DropzoneText>
                      <DropzoneText style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                        PNG, JPG, JPEG hasta 5MB
                      </DropzoneText>
                    </DropzoneContainer>
                  </div>
                ) : (
                  <ImagePreview>
                    <PreviewImage src={uploadedImage} alt="Preview" />
                    <RemoveButton onClick={removeImage}>
                      <X size={12} />
                    </RemoveButton>
                  </ImagePreview>
                )}
              </ImageUploadContainer>
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Upload size={20} />
                  Enviar solicitud
                </>
              )}
            </SubmitButton>
          </Form>
        </FormContainer>
      </FormSection>
    </LandingContainer>
  );
};

export default BillWiseLanding;
