import { Box, Typography } from '@mui/material';
import FeatureSection from '../components/landing-page/FeatureSection';
import TopicSelection from '../components/landing-page/TopicSelection';
import CustomButton from '../components/common/CustomButton';
import playIcon from '../assets/icons/play-icon.svg';
import heroImg from '../assets/images/hero.png';
import child1Img from '../assets/images/child-1.png';
import child2Img from '../assets/images/child-2.png';
import child3Img from '../assets/images/child-3.png';
import child4Img from '../assets/images/child-4.png';
import child5Img from '../assets/images/child-5.png';

const LandingPage = () => {
  const handleGetStarted = () => {
    console.log('get started');
  };

  const handleWatchVideo = () => {
    console.log('watch video');
  };

  return (
    <Box
      sx={{
        margin: '80px auto 120px auto',
        maxWidth: '1200px',
        '@media (max-width: 768px)': {
          margin: '40px auto 80px auto',
        },
      }}
    >
      <Box
        sx={(theme) => ({
          color: theme.palette.text.secondary,
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '80px',
              lineHeight: 1.1,
              maxWidth: '940px',
              margin: '0 20px',

              '@media (max-width: 1080px)': {
                fontSize: '40px',
              },
            }}
          >
            Let's learn about new knowledge and abilities.
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              maxWidth: '640px',
              margin: '24px 20px 32px 20px',
            }}
          >
            Let's discover new knowledge and new friends and have a learning
            experience with beautiful teachers.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 3,
              '@media (max-width: 640px)': {
                gap: 0.6,
              },
            }}
          >
            <CustomButton
              onClick={handleGetStarted}
              sx={{
                backgroundColor: '#1c1c1c',
                color: 'white',
                padding: '14px 40px',

                '&:hover': {
                  backgroundColor: '#2c2c2c',
                },

                '@media (max-width: 640px)': {
                  padding: '10px 28px',
                },
              }}
            >
              Get Started
            </CustomButton>
            <CustomButton
              onClick={handleWatchVideo}
              buttonType='text'
              sx={{
                fontWeight: 'bold',
                color: '#1c1c1c',
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
              }}
            >
              <Box component='img' src={playIcon} alt='Play Icon' />
              Watch Video
            </CustomButton>
          </Box>
          <Box
            component='img'
            src={heroImg}
            alt='Hero Image'
            sx={{
              width: '88%',
              maxWidth: '1620px',
              marginTop: '-68px',
              zIndex: -1,
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1) 33%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1) 33%, rgba(0,0,0,0) 100%)',

              '@media (max-width: 1080px)': {
                marginTop: '-56px',
                width: '95%',
              },
              '@media (max-width: 900px)': {
                marginTop: '-48px',
              },
              '@media (max-width: 768px)': {
                marginTop: '-24px',
              },
              '@media (max-width: 640px)': {
                marginTop: '-12px',
                width: '98%',
              },
              '@media (max-width: 572px)': {
                marginTop: 0,
              },
              '@media (max-width: 500px)': {
                marginTop: '20px',
              },
              '@media (max-width: 400px)': {
                marginTop: '40px',
                width: '99%',
              },
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '80px 20px 0 20px',
          gap: 1,

          '@media (max-width: 940px)': {
            margin: '60px 20px 0 20px',
          },
          '@media (max-width: 768px)': {
            margin: '40px 20px 0 20px',
          },
          '@media (max-width: 640px)': {
            margin: '20px 20px 0 20px',
          },
        }}
      >
        <TopicSelection />
      </Box>

      <Box>
        <FeatureSection
          image={child1Img}
          title='Incentivize Learning'
          content="Set personalized rewards that motivate and celebrate your child's achievements, turning every lesson into a fun, goal-driven challenge."
        />
        <FeatureSection
          image={child2Img}
          title='Engage in Meaningful Conversations'
          content='Transform learning into an interactive family adventure with guided discussions that deepen connections and encourage critical thinking.'
          rightSide
        />
        <FeatureSection
          image={child3Img}
          title="Empower Tomorrow's Thinkers"
          content="Take control of your child's educational journey today, nurturing a lifelong love for learning and building lasting bonds along the way."
        />
        <FeatureSection
          image={child4Img}
          title='Boost Reading Comprehension'
          content='Interactive and engaging lessons encourage careful reading and critical analysis, helping your child develop stronger reading skills.'
          rightSide
        />
        <FeatureSection
          image={child5Img}
          title='Enhance Writing Proficiency'
          content='Writing about what they learned will inspire your child to articulate their thoughts clearly, building confidence and writing ability.'
        />
      </Box>
    </Box>
  );
};

export default LandingPage;
