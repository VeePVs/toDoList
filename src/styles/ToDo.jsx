import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  checkButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ba74c4',
    marginRight: 10,
  },
  checkText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  uncheckText: {
    fontSize: 18,
    color: '#ff6b6b',
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
  },
  trashButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6b6b',
    marginRight: 10,
  }
});

export default styles;