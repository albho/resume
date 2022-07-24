import { Header } from 'semantic-ui-react';
import Links from './Links';

const About = ({ theme }) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Header as="h1" textAlign="center" inverted={theme}>
        Hi, I'm Albert <span style={{ marginLeft: '0.5rem' }}>👋🏻</span>
      </Header>
      <Header
        as="h2"
        textAlign="center"
        inverted={theme}
        style={{ maxWidth: '888px', margin: '0' }}
      >
        Former exercise instructor turned frontend developer.
        <br />I love solving difficult problems and building useful tools.
      </Header>
      <Header
        as="h3"
        textAlign="center"
        inverted={theme}
        style={{ maxWidth: '666px' }}
      >
        I am proficient with modern web development languages and libraries such
        as HTML5, CSS3, and JavaScript (ES6). I enjoy working mostly with{' '}
        <span className="about-text-hover"> React</span>.
      </Header>
      <Links theme={theme} />
    </div>
  );
};

export default About;
