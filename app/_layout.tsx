// app/_layout.tsx
import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../redux/store';


export default function RootLayoutWrapper() {
  return (
    <Provider store={store}>
     
        <Slot />
    
    </Provider>
  );
}
