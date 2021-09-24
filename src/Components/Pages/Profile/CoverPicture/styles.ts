import styled from "styled-components"
 
export const StyleCovPic:any = styled.div`
 height: 300px;
 display: flex;
 justify-content: flex-end;
 align-items: flex-end;
 padding: 24px;
 background-color: #fff;
 background-image: url(${(props:any)=>props.previewImage});
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;
`