import { Header, Divider, Item } from 'semantic-ui-react';

const skills = [
  {
    category: 'Languages',
    stack: 'HTML5, CSS3, JavaScript (ES6), TypeScript.',
  },
  {
    category: 'Frameworks, Libraries, & Environments',
    stack:
      'React, Gatsby, Node.js, BootStrap, SCSS.',
  },
  {
    category: 'Databases & Version Control',
    stack: 'SQL, NoSQL, Git, GitHub, GitLab.',
  },
  {
    category: 'Testing',
    stack: 'Jest, Storybook, Cypress.',
  },
];

const ItemExampleMetadata = ({ theme }) => {
  let primaryTextColor = theme ? 'white' : 'rgba(0,0,0,.87)';
  let secondaryTextColor = theme ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.6)';

  const skillsList = skills.map((skill, i) => {
    return (
      <Item key={i}>
        <Item.Content>
          <Item.Header style={{ color: primaryTextColor }}>
            {skill.category}
          </Item.Header>
          <Item.Meta style={{ color: secondaryTextColor }}>
            {skill.stack}
          </Item.Meta>
        </Item.Content>
      </Item>
    );
  });
  return (
    <Item.Group>
      <Divider inverted={theme} />
      <Header as="h2" inverted={theme}>
        Skills
      </Header>
      <Item.Group style={{ marginTop: '1rem' }}>{skillsList}</Item.Group>
    </Item.Group>
  );
};

export default ItemExampleMetadata;
