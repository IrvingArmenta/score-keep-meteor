import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>;
    } else {
      return null;
    }
  }
  render() {
    return (
      <header role="banner" className="title-bar">
        <div className="wrapper">
          <h1 className="title-bar__title">{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </header>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {
  // title: 'Default title'
}
