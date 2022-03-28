import { Fragment } from 'react';
import { Header, Button, Icon, Item, Label, Divider } from 'semantic-ui-react';
import neighboureats from '../images/neighboureats.png';
import jungle from '../images/jungle.png';
import scheduler from '../images/scheduler.png';
import resourcewall from '../images/resourcewall.png';
import tweeter from '../images/tweeter.png';
import tinyapp from '../images/tinyapp.png';
import lotide from '../images/lotide.png';

const projects = [
  {
    title: 'NeighbourEats',
    image: neighboureats,
    github: 'https://github.com/albho/NeighbourEats',
    date: 'Mar. 2022',
    description: `A web app that allows users to buy and sell home-cooked
                  food items with their local neighbours. Core features are built
                  around the Google Maps API and includes an interactive
                  browsing interface, dynamic search, sorting, and filtering.
                  Styled with Material UI.`,
    stack: [
      'React',
      'React Router',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Axios',
      'Material UI',
    ],
  },
  {
    title: 'Jungle',
    image: jungle,
    github: 'https://github.com/albho/jungle-rails',
    date: 'Mar. 2022',
    description: `An inherited e-commerce application built with Rails 4.2. A practice project for working with existing codebases.`,
    stack: [
      'Ruby',
      'Rails',
      'ERB',
      'PostgreSQL',
      'RSpec',
      'Capybara',
      'Poltergeist',
    ],
  },
  {
    title: 'Interview Scheduler',
    image: scheduler,
    github: 'https://github.com/albho/scheduler',
    date: 'Feb. 2022',
    description: `A single-page React application that allows users to book, edit, and cancel interviews. A practice project for working with existing codebases.`,
    url: {
      text: 'Deployed on',
      linkText: 'Netlify',
      link: 'https://angry-yalow-159515.netlify.app/',
      end: '.',
    },
    stack: [
      'React',
      'Axios',
      'SCSS',
      'Node.js',
      'Express',
      'WebSockets',
      'PostgreSQL',
      'Jest',
      'Cypress',
      'Storybook',
      'Webpack Dev Server',
      'Testing Library',
    ],
  },
  {
    title: 'Resource Wall',
    image: resourcewall,
    github: 'https://github.com/albho/Resource-Wall',
    date: 'Feb. 2022',
    description: `A web app that allows users to bookmark and share interesting
                  resources (URLs). Core features are built around the LinkPreview API
                  and includes functionality for users to like, rate, comment on,
                  save, and upload resources.`,
    stack: ['EJS', 'jQuery', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Tweeter',
    image: tweeter,
    github: 'https://github.com/albho/tweeter',
    date: 'Feb. 2022',
    description: `A simple, single-page Twitter clone. Built with a fully responsive mobile-first design and basic XSS protection.`,
    stack: ['jQuery', 'SCSS', 'Node', 'Express'],
  },
  {
    title: 'TinyApp',
    image: tinyapp,
    github: 'https://github.com/albho/tinyapp',
    date: 'Jan. 2022',
    description: `A full stack web application that allows users to shorten long URLs (à la bit.ly).`,
    stack: ['EJS', 'Node.js', 'Express', 'bcrypt'],
  },
  {
    title: 'Lotide',
    image: lotide,
    github: 'https://github.com/albho/lotide',
    date: 'Jan. 2022',
    description: `A mini clone of the lodash library.`,
    url: {
      text: 'Published on',
      linkText: 'npm',
      link: 'https://www.npmjs.com/package/@albertho/lotide',
      end: '.',
    },
    stack: ['JavaScript'],
  },
];

const Projects = ({ theme }) => {
  let primaryTextColor = theme ? 'white' : 'rgba(0,0,0,.87)';
  let secondaryTextColor = theme ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.6)';

  const projectsList = projects.map((project, i) => {
    return (
      <Fragment key={i}>
        <Item>
          <Item.Image
            bordered
            src={project.image}
            alt={project.title}
            size="medium"
            as="a"
            href={project.github}
            target="blank"
            className="image-hover"
          />

          <Item.Content>
            <a href={project.github} target="blank">
              <Button primary floated="right" inverted={theme}>
                GitHub
                <Icon style={{ margin: '0 0 0 0.5rem' }} name="github" />
              </Button>
            </a>

            <Item.Header
              as="a"
              href={project.github}
              target="blank"
              style={{
                color: primaryTextColor,
                marginTop: '0.5rem',
              }}
            >
              {project.title}
            </Item.Header>
            <Item.Meta style={{ color: secondaryTextColor }}>
              <span className="cinema">{project.date}</span>
            </Item.Meta>
            <Item.Description
              style={{ color: primaryTextColor, maxWidth: '666px' }}
            >
              {project.description}{' '}
              {project.url && (
                <span>
                  {project.url.text}{' '}
                  <a href={project.url.link} target="blank">
                    {project.url.linkText}
                  </a>
                  {project.url.end}
                </span>
              )}
            </Item.Description>
            <Item.Extra>
              {project.stack.map((tech, i) => (
                <Label key={i} content={tech} />
              ))}
            </Item.Extra>
          </Item.Content>
        </Item>
        <Divider hidden />
      </Fragment>
    );
  });

  return (
    <div>
      <Divider inverted={theme} />
      <Header as="h2" inverted={theme}>
        Recent Projects
      </Header>
      <Item.Group style={{ marginTop: '1rem' }}>{projectsList}</Item.Group>
    </div>
  );
};

export default Projects;
