import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef2f7', // soft background
    padding: 20,
  },

  heading: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 40,
    color: '#34495e', // darkish text
    backgroundColor: '#ffffff', // card-like effect
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    shadowColor: '#000', // subtle shadow for web & mobile
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Android shadow
    textAlign: 'center',
  },

  buttonContainer: {
    width: 200,
    marginVertical: 10,
  },

  toggleButton: {
    width: 200,
    marginTop: 20,
  },
});
