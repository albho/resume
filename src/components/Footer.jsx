import { Divider, Header } from 'semantic-ui-react';

const Footer = ({ theme }) => (
  <div>
    <Divider />
    <Header as="h3" textAlign="center" inverted={theme}>
      Thanks for visiting!
    </Header>
    <Divider hidden style={{ marginTop: '2rem' }} />
  </div>
);

export default Footer;
