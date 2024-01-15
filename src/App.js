import logo from './logo.svg';
import './App.css';
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-react'

function App() {

  const {isLoading, error, data, getData} = useVisitorData(
    {extendedResult: true},
    {immediate: true}
  );

  /*const lat = error ? error.message : data.ipLocation.latitude;
  const long = error ? error.message : data.ipLocation.longitude;
  const city = error ? error.message : data.ipLocation.city.name;
  const country = error ? error.message : data.ipLocation.country;
  const postalCode = error ? error.message : data.ipLocation.postalCode;
  const timeZone = error ? error.message : data.ipLocation.timezone;
          <p>{String.valueOf(lat)}-{long}-{city}-{country}-{postalCode}-{timeZone}</p>
*/


  return (
    <div>
      <button onClick={() => getData({ignoreCache: true})}>
        Reload data
      </button>
      <p>VisitorId: {isLoading ? 'Loading...' : data?.visitorId}</p>
      <p>Full visitor data:</p>
        <hr></hr>
      <pre>{error ? error.message : data.ipLocation.latitude + data.ipLocation.longitude + data.ipLocation.city.name + data.ipLocation.country.name + data.ipLocation.postalCode +  data.ipLocation.timezone}</pre>
  </div>
  );
}

export default App;
