import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import withTheme from '../util/withTheme';

const getContainerStyle = ({ theme, size, color }) => {
  return {
    ...styles.container,
    backgroundColor: theme.brandColor[color],
    padding: theme.actionButtonSize[size],
    borderRadius: theme.actionButtonSize[size] * 2,
  };
};

const ActionButton = (props) => {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([getContainerStyle(props), props.style])}
      onPress={props.onPress}
    >
      {props.icon ||
        <Feather
          name="plus"
          size={props.theme.iconSize[props.size]}
          color={props.iconColor || props.theme.brandColor.white} />
      }
    </TouchableOpacity>
  );
};

ActionButton.propTypes = {
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  onPress: PropTypes.func.isRequired,
  iconColor: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  style: PropTypes.object,
};

ActionButton.defaultProps = {
  size: 'medium',
  color: 'primary',
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    elevation: 3,
    aspectRatio: 1,
    bottom: 25,
    right: 25,
  },
});

export default withTheme(ActionButton);
