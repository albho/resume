import { Header, Divider, Item } from 'semantic-ui-react';

const skills = [
  {
    category: 'Languages',
    stack: 'HTML5, CSS3, JavaScipt, ECMAScript 6 (ES6), EJS, JSX, JSON.',
  },
  {
    category: 'Frameworks, Libraries, & Environments',
    stack:
      'React, Node.js, Express, Ruby, Rails, ActiveRecord, jQuery, BootStrap, SCSS, MUI, AJAX.',
  },
  {
    category: 'Databases & Version Control',
    stack: 'MySQL, PostgreSQL, MongoDB, Git, GitHub.',
  },
  {
    category: 'Testing',
    stack: 'Jest, Storybook, Cypress, Mocha, Chai.',
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
