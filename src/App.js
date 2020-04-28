import React from 'react';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './Components';
import { fetchData } from './api';
import coronaImage from './images/image.png'
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount(){
    const data = await fetchData();
    this.setState({ data });
  }
  handleCountryChange = async (country) => {
    const CountryData = await fetchData(country);
    this.setState({data: CountryData, country: country})
  }
  render(){
    const { data, country } = this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid 19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

// class App extends React.Component {
//   state = {
//     data: {},

//   }

//   async componentDidMount() {
//     const data = await fetchData();

//     this.setState({ data });
//   }

  

//   render() {
//     const { data } = this.state;

//     return (
//       <div className={styles.container}>
        
//         <Cards data={data} />
      
        
//       </div>
//     );
//   }
// }

export default App;
