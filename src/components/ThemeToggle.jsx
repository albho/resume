import { Button, Icon } from 'semantic-ui-react';

const ThemeToggle = ({ theme, setDark }) => {
  let iconName = theme ? 'lightbulb' : 'lightbulb outline';

  return (
    <div style={{ position: 'absolute', right: '0', margin: '1rem' }}>
      <Button basic icon inverted={theme} onClick={() => setDark(!theme)}>
        <Icon name={iconName} />
      </Button>
    </div>
  );
};

export default ThemeToggle;
