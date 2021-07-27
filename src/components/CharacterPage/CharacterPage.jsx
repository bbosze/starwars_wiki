import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import CharacterInfoLine from './CharacterInfoLine';
import InfoList from './InfoList';

const useStyles = createUseStyles((theme) => ({
  characterPageContainer: {
    padding: 30,
    background: theme.color.nero,
  },
}));

const CharacterPage = ({ history: { location: { state: { person } } } }) => {
  const { birthYear, gender, eyeColor, hairColor, skinColor, height, mass, films, species } = person;
  const classes = useStyles();
  return (
    <div className={classes.characterPageContainer}>
      <CharacterInfoLine label="Birth year" text={birthYear} />
      <CharacterInfoLine label="Gender" text={gender} />
      <CharacterInfoLine label="Eye color" text={eyeColor} />
      <CharacterInfoLine label="Hair color" text={hairColor} />
      <CharacterInfoLine label="Skin color" text={skinColor} />
      <CharacterInfoLine label="Height" text={height} />
      <CharacterInfoLine label="Mass" text={mass} />
      <InfoList urlList={films} dataName="title" label="Films" />
      <InfoList urlList={species} dataName="name" label="Species" />
    </div>
  );
};

CharacterPage.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        person: PropTypes.shape({
          birthYear: PropTypes.string,
          gender: PropTypes.string,
          eyeColor: PropTypes.string,
          hairColor: PropTypes.string,
          skinColor: PropTypes.string,
          height: PropTypes.string,
          mass: PropTypes.string,
          films: PropTypes.arrayOf(PropTypes.string),
          species: PropTypes.arrayOf(PropTypes.string),
        }),
      }),
    }),
  }),
};

CharacterPage.defaultProps = {
  history: {
    location: {
      state: {
        person: {
        },
      },
    },
  },
};

export default CharacterPage;
