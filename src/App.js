import './App.css';
import './Global.css';

function App() {

  return (
    <div className="App">
      <div className="header">
        <div className='header-left'>
          <h1>OpenSea</h1>
          <p>Drops</p>
          <p>Stats</p>
          <p>Create</p>
        </div>
        <div className='header-middle'>
          <i class='bx bx-search'/>
          <input placeholder='Search'/>
        </div>
        <div className='header-right'>
          <button className='login'>
            <i class='bx bx-wallet' />
            Login
          </button>
          <button className='account'>
            <i class='bx bx-user-circle' />
          </button>
          <button className='shop'>
            <i class='bx bx-cart-alt' />
          </button>
        </div>
      </div>
      <div className='img-background'>
        <div className='img-background-profile'>
        <div className='logo'>
        </div>
          <div className='nft-name'>
            <h1>Ninja Squad Official</h1>
            <i class='bx bx-check-circle' />
            <i class='bx bx-sitemap' />
            <i class='bx bxl-twitter' />
          </div>
        <div className='profile'>
          <p>NinjaSquadNFT</p>
          <i class='bx bx-check-circle' />
        </div>
        </div>
        <div className='infos'>
          <div>
            <h1>4429 ETH</h1>
            <p>Total volume</p>
          </div>
          <div>
            <h1>0,1386</h1>
            <p>Floor price</p>
          </div>
          <div>
            <h1>0,1265</h1>
            <p>Best offer</p>
          </div>
          <div>
            <h1>5%</h1>
            <p>Listed</p>
          </div>
          <div>
            <h1>3775 (42%)</h1>
            <p>Owners (Unique)</p>
          </div>
        </div>
      </div>
      <div className='description'>
        <p>Ninja Squad and Ninja Mfers collections roots back to Ninja Traders, </p>
        <div className='more-description'>
          <p>Items 8887</p>
          <p>Created Nov 2021</p>
          <p>Creator earnings 6.5%</p>
          <p>Chain Ethereum</p>
        </div>
      </div>
      <div className='options'>
        <button>Items</button>
        <button>Offers</button>
        <button>Analytics</button>
        <button>Activity</button>
      </div>
      <div className='content-header'>
          <p>Some texts</p>
        </div>
      <div className='content'>
        <div className='sidebar'>
          <h1>Status</h1>
          <button>All</button>
          <button>Listed</button>
          <button>On auction</button>
          <button>New</button>
          <button>Has offers</button>
          <div>
            <h1>Creator earnings</h1>
          </div>
        </div>
        <div className='cards'>
        <div className='card'>
            <div className='img' />
            <div className='card-header'>
              <h3>Product name</h3>
              <button># 0000</button>
            </div>
            <p>0,1386 ETH</p>
            <p>Last sale: 0,12 ETH</p>
          </div>
          <div className='card'>
            <div className='img' />
            <div className='card-header'>
              <h3>Product name</h3>
              <button># 0000</button>
            </div>
            <p>0,1386 ETH</p>
            <p>Last sale: 0,12 ETH</p>
          </div>
          <div className='card'>
            <div className='img' />
            <div className='card-header'>
              <h3>Product name</h3>
              <button># 0000</button>
            </div>
            <p>0,1386 ETH</p>
            <p>Last sale: 0,12 ETH</p>
          </div>
          <div className='card'>
            <div className='img' />
            <div className='card-header'>
              <h3>Product name</h3>
              <button># 0000</button>
            </div>
            <p>0,1386 ETH</p>
            <p>Last sale: 0,12 ETH</p>
          </div>
          <div className='card'>
            <div className='img' />
            <div className='card-header'>
              <h3>Product name</h3>
              <button># 0000</button>
            </div>
            <p>0,1386 ETH</p>
            <p>Last sale: 0,12 ETH</p>
          </div>
          <div className='card'>
            <div className='img' />
            <div className='card-header'>
              <h3>Product name</h3>
              <button># 0000</button>
            </div>
            <p>0,1386 ETH</p>
            <p>Last sale: 0,12 ETH</p>
          </div>
          <div className='card'>
            <div className='img' />
            <div className='card-header'>
              <h3>Product name</h3>
              <button># 0000</button>
            </div>
            <p>0,1386 ETH</p>
            <p>Last sale: 0,12 ETH</p>
          </div>
          <div className='card'>
            <div className='img' />
            <div className='card-header'>
              <h3>Product name</h3>
              <button># 0000</button>
            </div>
            <p>0,1386 ETH</p>
            <p>Last sale: 0,12 ETH</p>
          </div>
          <div className='card'>
            <div className='img' />
            <div className='card-header'>
              <h3>Product name</h3>
              <button># 0000</button>
            </div>
            <p>0,1386 ETH</p>
            <p>Last sale: 0,12 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;