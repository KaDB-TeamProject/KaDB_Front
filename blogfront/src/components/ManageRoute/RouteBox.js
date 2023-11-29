    import styled from 'styled-components'
    import data from './TempData'
    import { useNavigate } from 'react-router-dom'

    const RouteContainer = styled.div`

    width: calc(100div - 7rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;


    `



    const RouteInfoBox = styled.div`

    width: 60vw;
    height: 13vh;
    background-color: #FFDB31;
    padding: 10px;
    margin: 1vh;
    box-sizing: border-box;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;



    `


    const RouteTitle = styled.div`

    font-size: 3vh;

    `
    const RouteDate = styled.div`



    `





    function RouteBox() {

        const navi = useNavigate('')


        return (

            <RouteContainer>


                {data.map(function (a, i) {

                    return (
                        <RouteInfoBox onClick = {()=>navi('/routeview')} id={i}>
                            <RouteTitle>{a.title}</RouteTitle>
                            <RouteDate>{a.date}</RouteDate>
                        </RouteInfoBox>

                    )

                })}




            </RouteContainer>


        )



    }
    export default RouteBox;