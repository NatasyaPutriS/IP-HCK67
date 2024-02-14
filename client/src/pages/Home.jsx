import { useDispatch, useSelector } from "react-redux"

const Home = () => {
    const { loading, userInfo, error, success } = useSelector(
        (state) => state.auth
    )
    const dispatch = useDispatch();
    console.log(loading, userInfo, error, success)
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
