import React from 'react'
import Layout from '../../Layout/Layout'
import {Box, Button, TextField, Typography} from '@mui/material'

const Index = () => {
    return (
        <Layout
            navbarSx={{
            opacity: 1,
            // background: '#000000eb',
        }}
            title='injoi NFT Mint '>
            <main>

                <Box
                    sx={{
                      backgroundSize:'cover',
                      backgroundRepeat:'no-repeat',
                    backgroundImage: '../public/assets/mint-bg.jpg',
                    height: '100%',
                    width: '100%',
                    paddingTop: '10vh',
                    
                }}>
                  <Box sx={{alignItem:'center',flexDirection:'column',maxWidth:'md',textAlign:'center',display:'flex',justifyContent:'center',margin:'0 auto',height:'100%'}}>
                  
                  <Typography component='h1' sx={{color:'black',fontSize:{xs:'1.5em',md:'2em',lg:'2.5em'},fontWeight:'bold',py:'.5em'}}>
                          Our Mint is Live!
                  </Typography>
                  <iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0xF0Fd3e4ACf18B3De534ab36c78700519DF534e49&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F80001.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=94da7d642c1c31c73a6c5c5753457476&theme=light&primaryColor=blue"
    width="100%"
    height="600px"
    
></iframe>
<br />
                  <Typography component='h4' sx={{color:'gray',fontWeight:'300',maxWidth:'sm',margin:'0 auto',textAlign:'center'}}>
                      Do not forget to share your mint in our discord!  
                  </Typography>
                  
                  </Box>
                   <br />
                   <br />

                </Box>
            </main>
        </Layout>
    )
}

export default Index