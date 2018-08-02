import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
import { withNavigation } from 'react-navigation';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  onRowPress() {
    this.props.navigation.navigate('EmployeeEdit', { employee: this.props.employee.item })
  }

  render() {
    const { name } = this.props.employee.item
    const { titleStyle } = styles

    return (
      <TouchableOpacity
        onPress={() => {
          this.onRowPress()
        }}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({

  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }, 
});

// const mapStateToProps = (state, ownProps) => {
//   const expanded = state.selectedLibraryId === ownProps.library.item.id;

//   return { expanded };
// };

// export default connect(mapStateToProps, actions)(ListItem);

export default withNavigation(ListItem);