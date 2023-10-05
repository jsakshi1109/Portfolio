import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 1;
  width: 100%;
  max-width: 400px;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
  }
  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  order: 2;
  align-items: left;
  
  @media (max-width: 960px) {
    order: 1;
    justify-content: left;
    margin-bottom: 30px;
  }
  
  @media (max-width: 640px) {
    margin-bottom: 20px;
  }
`;

export const Img = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  text-align: left;
  margin-bottom: 8px;
  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  text-align: center;
  margin-bottom: 16px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary};
  text-align: left;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 12px 0;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.primary};
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
  }
  @media (max-width: 640px) {
    padding: 10px 0;
    font-size: 16px;
  }
`;

