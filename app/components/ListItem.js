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

class ListItem extends React.Component {
  render() {
    const { name } = this.props.employee.item
    const { titleStyle } = styles
    console.log(this.props);

    return (
      <TouchableOpacity
        // onPress={() => {
        //   this.props.expanded ? this.props.selectLibrary(null) : this.props.selectLibrary(id), 
        //   LayoutAnimation.linear();
        // }}
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
export default ListItem