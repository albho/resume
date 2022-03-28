import { useState, useEffect } from 'react';
import { Header, Divider, Item } from 'semantic-ui-react';

const institutions = [
  {
    name: 'Lighthouse Labs',
    url: 'https://www.lighthouselabs.ca/en/web-development-bootcamp',
    accreditation: 'Diploma, Web Development Bootcamp',
    date: 'Jan. 2022 - Apr. 2022',
    description: `Full-time immersive web development bootcamp.
                  Curriculum included topics such as JavaScript, React, Node.js, Express,
                  Ruby on Rails, PostgreSQL, jQuery, HTML, CSS, and SCSS.`,
  },
  {
    name: 'Udemy',
    url: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
    accreditation: 'Certificate, The Web Developer Bootcamp 2021',
    date: 'Sept. 2021 - Oct. 2021',
    description: `Web development course covering topics such as modern JavaScript, Node.js,
                  Express, MongoDB, HTTP, API testing, authentication, and security.`,
  },
];

const breakpointQuery = '(min-width: 480px)';

const ItemExampleItems = ({ theme }) => {
  const [responsive, setResponsive] = useState({
    matches: window.matchMedia(breakpointQuery).matches,
  });

  useEffect(() => {
    const handler = e => setResponsive({ matches: e.matches });
    window.matchMedia(breakpointQuery).addEventListener('change', handler);
  }, []);

  let primaryTextColor = theme ? 'white' : 'rgba(0,0,0,.87)';
  let secondaryTextColor = theme ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.6)';

  const institutionsList = institutions.map((institution, i) => {
    return (
      <Item key={i}>
        <Item.Content>
          <Item.Header
            style={{
              color: primaryTextColor,
              textDecoration: 'underline',
              marginBottom: responsive.matches ? '0' : '1rem',
            }}
            as="a"
            href={institution.url}
            target="blank"
          >
            {institution.name}
          </Item.Header>
          <Item.Header
            style={{
              color: primaryTextColor,
              float: responsive.matches ? 'right' : '',
              fontSize: responsive.matches ? 'initial' : 'medium',
              display: 'block',
            }}
          >
            {institution.date}
          </Item.Header>

          <Item.Meta style={{ color: secondaryTextColor }}>
            {institution.accreditation}
          </Item.Meta>
          <Item.Description
            style={{ color: primaryTextColor, maxWidth: '888px' }}
          >
            {institution.description}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  });
  return (
    <div>
      <Divider inverted={theme} />
      <Header as="h2" inverted={theme}>
        Education and Certificates
      </Header>
      <Item.Group style={{ marginTop: '1rem' }}>{institutionsList}</Item.Group>
    </div>
  );
};

export default ItemExampleItems;
