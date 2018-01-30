import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as publisherActions from '../../actions/PublisherActions';
import {connect} from 'react-redux';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { EtherIcon, AdtIcon, ProfileIcon } from './Icons';
import keys from '../../i18n';
import './style.css';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const Header = ({ balance, onSwitcherClick }) => (
  <Toolbar className='Header'>
    <ToolbarGroup firstChild>
      <IconButton tooltip='Switch registry' onClick={onSwitcherClick}>
        <ActionHome />
      </IconButton>
      <ToolbarTitle text={keys.appHeader} className='HeaderTitle' />
    </ToolbarGroup>
    <ToolbarGroup>
      <EtherIcon />
      <ToolbarTitle className='HeaderText' text={balance.fetching ? '...' : balance.ethers + ` ${keys.eth}`} />
      <ToolbarSeparator className='Separator' />
      <AdtIcon />
      <ToolbarTitle className='HeaderText' text={balance.fetching ? '...' : balance.tokens + ` ${keys.adt}`} />
      <ToolbarSeparator className='Separator' />
      <ProfileIcon />
    </ToolbarGroup>
  </Toolbar>
);

Header.propTypes = {
  // Sometimes web3 returns numbers as strings because they're greater than 2^53
  balance: PropTypes.object.isRequired,
  onSwitcherClick: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  return {
    balance: state.publisher
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(publisherActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);