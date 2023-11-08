import postlist from './TempPostName'
import styled from 'styled-components'

const PostItem = styled.div`
  font-size: 9pt;
  font-family: KakaoRegular;
  margin-left: 22px;
  margin: 20px;
`;

const P = styled.div`

margin: 0px;
height: 15px;

`

function CategoryBlogList(props) {

    return (

        postlist.map(function (a) {


            if(a.category == props.category){

            return (

                <PostItem>
                    
                    <P>{a.date}</P>
                    <P>{a.title}</P>

                </PostItem>

            )

            }
        })

    )


}
export default CategoryBlogList;