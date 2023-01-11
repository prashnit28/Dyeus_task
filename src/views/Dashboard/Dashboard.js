import React from 'react'
import Page from '../../components/Page';
import HomeImage from '../../assets/img/background.jpg';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Box, Card, CardContent, Button, Typography, Grid, Table, TableBody, TableCell, Paper, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import TokenSymbol from '../../components/TokenSymbol';
import moment from 'moment';
import ProgressCountdown from './components/ProgressCountdown';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useTotalValueLocked from '../../hooks/useTotalValueLocked'
import CountUp from 'react-countup';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;
const useStyles = makeStyles((theme) => ({
    gridItem: {
        height: '100%',
        [theme.breakpoints.up('md')]: {
            height: 'auto',
        },
    },
}));
const TITLE = 'bomb.money | Dashboard';

function Dashboard() {
    const rows = [];
    const classes = useStyles();
    const {to } = useTreasuryAllocationTimes();
    const currentEpoch = useCurrentEpoch();
    const TVL = useTotalValueLocked();


    return (
        <Switch>
            <Page>
                <BackgroundImage />
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
                    Dashboard
                </Typography>

                <Box mt={5}>
                    <Grid container justify="center" spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Card >
                                <CardContent style={{ textAlign: 'center' }}>
                                    <Typography style={{ textTransform: 'uppercase' }} >Bomb Finance Summary</Typography>
                                    <hr spacing={3} />
                                    <Grid container>
                                        <Grid item lg={6} >
                                            <Grid container style={{ marginTop: '18px' }}>
                                                <Grid item lg={2}>

                                                </Grid>
                                                <Grid item lg={10}>
                                                    <Grid container style={{ fontSize: '10px' }}>
                                                        <Grid item lg={3} style={{ marginLeft: '39px' }}>
                                                            Current Supply
                                                        </Grid>
                                                        <Grid item lg={3} style={{ textAlign: 'left', paddingLeft: '10px' }}>
                                                            Total Suply
                                                        </Grid>
                                                        <Grid item lg={3} style={{ textAlign: 'left', paddingLeft: '0px' }}>
                                                            price
                                                        </Grid>
                                                    </Grid>
                                                    <hr style={{ width: '100%' }} />
                                                </Grid>
                                            </Grid>
                                            <Grid container style={{ marginTop: '10px' }}>
                                                <Grid item lg={3}>
                                                    $BOMB
                                                </Grid>
                                                <Grid item lg={2}>
                                                    8.66M
                                                </Grid>
                                                <Grid item lg={2}>
                                                    60.9k
                                                </Grid>
                                                <Grid item lg={2}>
                                                    $0.24 <br></br>
                                                    1.05 BTCB
                                                </Grid>
                                                <Grid item lg={12}>
                                                    <hr />
                                                </Grid>
                                            </Grid>
                                            <Grid container style={{ marginTop: '10px' }}>
                                                <Grid item lg={3}>
                                                    $BOMB
                                                </Grid>
                                                <Grid item lg={2}>
                                                    8.66M
                                                </Grid>
                                                <Grid item lg={2}>
                                                    60.9k
                                                </Grid>
                                                <Grid item lg={2}>
                                                    $0.24 <br></br>
                                                    1.05 BTCB
                                                </Grid>
                                                <Grid item lg={12}>
                                                    <hr />
                                                </Grid>
                                            </Grid>
                                            <Grid container style={{ marginTop: '10px' }}>
                                                <Grid item lg={3}>
                                                    $BOMB
                                                </Grid>
                                                <Grid item lg={2}>
                                                    8.66M
                                                </Grid>
                                                <Grid item lg={2}>
                                                    60.9k
                                                </Grid>
                                                <Grid item lg={2}>
                                                    $0.24 <br></br>
                                                    1.05 BTCB
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid item lg={2}>
                                                </Grid>
                                                <Grid item lg={10}>
                                                    <hr />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={4} >
                                            <p></p>
                                        </Grid>
                                        <Grid item lg={2} >
                                            <p>Current Epochs</p>
                                            <h4 style={{color:'white'}}>{Number(currentEpoch)}<CountUp style={{ fontSize: '25px' }} end={TVL} separator="," prefix="$" /></h4>
                                            <hr />
                                             <h4 style={{color:'white'}}><ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" /></h4>
                                            <p style={{fontSize:'14px'}}>Next Epochs in</p>
                                            <hr />
                                            <span >Live Twap:<span style={{ color: 'green' }}>1.17</span></span><br />
                                            <span>TVL:<span style={{ color: 'green' }}><CountUp  end={TVL} separator="," prefix="$" /></span></span><br />
                                            <span>Last Eopchs twap : <span style={{ color: 'green' }}>1.22</span></span>
                                        </Grid>
                                    </Grid>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={3} mt={5}>
                        <Grid item lg={8} className={classes.gridItem} style={{}}>
                            <Grid container >
                                <Grid item lg={12} style={{ textAlign: 'right', color: '#9EE6FF' }}>
                                    <a href="#" style={{ color: '#9EE6FF' }}>Read Investment Strategy </a>
                                </Grid>
                            </Grid>
                            <Grid container style={{ marginTop: '10px' }}>
                                <Grid item lg={12} style={{ textAlign: 'center', backgroundColor: '#00ADE8', color: 'white' }}>
                                    <h2 style={{ padding: '5px' }}>Invest Now</h2>
                                </Grid>
                            </Grid>
                            <Grid container style={{ marginTop: '10px' }} >
                                <Grid item style={{ textAlign: 'center', backgroundColor: '#728CDF', marginRight: '2%', width: '48%' }}>
                                    <h2 style={{ padding: '5px' }}>Chat on Discord</h2>
                                </Grid>
                                <Grid item style={{ textAlign: 'center', backgroundColor: '#728CDF', marginLeft: '2%', width: '48%' }}>
                                    <h2 style={{ padding: '5px' }}>Read Docs</h2>
                                </Grid>
                            </Grid>
                            <Card className={classes.gridItem} style={{ marginTop: '10px' }}>
                                <Grid container style={{ paddingRight: '20px', paddingLeft: '15px' }}>
                                    <Grid item lg={1}>
                                        <div style={{ marginTop: '35px' }}>
                                            <TokenSymbol size={48} symbol="BSHARE" />
                                        </div>
                                    </Grid>
                                    <Grid item lg={11}>
                                        <Grid container style={{ marginTop: '0px' }}>
                                            <Grid item lg={12} style={{ marginBottom: '2px' }}>
                                                <p><span style={{ fontSize: '22px', fontWeight: 700 }}>Boardroom</span><span style={{ fontSize: '12px', backgroundColor: '#00E8A2', borderRadius: '3px', marginLeft: '10px', paddingLeft: '10px', paddingRight: '10px' }} justifyContent="flex-end">Recomended</span></p>
                                                {/* <p style={{ fontSize: '14px', width: '100%' }}><span >Stake BSHARE and earn BOMB every epoch</span></p> */}
                                            </Grid>
                                            <Grid item lg={6}>
                                                <p style={{ fontSize: '14px' }}><span >Stake BSHARE and earn BOMB every epoch</span></p>
                                            </Grid >
                                            <Grid item lg={6} style={{ textAlign: 'right' }}>
                                                <p style={{ fontSize: '14px' }}><span >TVL: $1,008,430</span></p>
                                            </Grid>
                                            <Grid item lg={12}>
                                                <hr />
                                            </Grid>
                                            <Grid item lg={12} style={{ textAlign: 'right' }}>
                                                <p style={{ fontSize: '14px' }}><span >Total Staked: 7232</span></p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container style={{ paddingRight: '20px', paddingLeft: '25px' }}>
                                    <Grid itme lg={2}>
                                        <span style={{ fontSize: '14px' }}>Daily Return :</span><br />
                                        <spqn style={{ fontSize: '20px' }}>2%</spqn>
                                    </Grid>
                                    <Grid itme lg={2} >
                                        <span style={{ fontSize: '14px' }}>Your Stack :</span><br />
                                        <spqn style={{ fontSize: '20px' }}>6.0000</spqn><br></br>
                                        <spqn style={{ fontSize: '14px' }}>=$1171.62</spqn>
                                    </Grid>
                                    <Grid itme lg={3} >
                                        <span style={{ fontSize: '14px' }}>Daily Return :</span><br />
                                        <spqn style={{ fontSize: '20px' }}>1660.4414</spqn><br></br>
                                        <spqn style={{ fontSize: '14px' }}>=$298.88</spqn>
                                    </Grid>
                                    <Grid itme lg={5}>
                                        <Grid container >
                                            <Grid itme lg={6} >
                                                <Button style={{ width: '95%', borderRadius: '30px', border: '1px solid #728CDF', marginRight: '5px' }}>
                                                    Deposit
                                                </Button>
                                            </Grid>
                                            <Grid itme lg={6} >
                                                <Button style={{ width: '95%', borderRadius: '30px', border: '1px solid #728CDF', marginLeft: '5px' }}>
                                                    Withdraw
                                                </Button>
                                            </Grid>
                                            <Grid item lg={12} style={{ marginTop: '10px' }}>
                                                <Button style={{ width: '100%', borderRadius: '30px', border: '1px solid #728CDF', marginBottom: '18px' }}>
                                                    Claim Rewards
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card className={classes.gridItem} style={{ height: '400px' }}>
                                <h4 style={{ margin: '20px', color: 'white' }}>Latest News</h4>
                            </Card>

                        </Grid>
                    </Grid>
                </Box>
            </Page>
        </Switch>
    );
};

export default Dashboard