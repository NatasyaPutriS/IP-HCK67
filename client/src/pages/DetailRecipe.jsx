import { useEffect, useState } from "react"
import { FaBookmark, FaClock, FaHeart, FaShare, FaUser } from "react-icons/fa"
import { useParams } from "react-router-dom"
import ReactHtmlParser from "react-html-parser"
const DetailRecipe = () => {
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState({})
    const params = useParams()
    const id = params.id
    const fetchDetailRecipe = async () => {
        setLoading(true)
        const response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=a8034e9b73d2431284cf07abcd0c0986`,
            {
                method: "GET",
            }
        ) 

        const data = await response.json()

        setRecipe(data)
        setLoading(false)
    } 

    useEffect(() => {
        fetchDetailRecipe()
    }, [id])

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-slate-800"></div>
            </div>
        ) 
    }

    return (
        <div className="max-w-7xl mx-auto p-6 flex sm:flex-row flex-col-reverse gap-5 items-start">
            <div className="flex-1 rounded-sm bg-white space-y-3">
                <img
                    src={recipe?.image}
                    className="w-full sm:h-[400px] h-[300px] rounded-sm shadow"
                    alt=""
                />
                <div className="w-full p-3 rounded-sm shadow">
                    <h1 className="text-xl font-bold sm:text-2xl">{recipe?.title}</h1>
                </div>
                <div className="w-full p-3 rounded-sm shadow flex justify-start gap-2 items-center">
                    <h3 className="font-semibold flex gap-2 items-center">
                        <span className="text-pink-500 font-bold">
                            <FaHeart />
                        </span>{" "}
                        <span>:</span> <span>{recipe?.aggregateLikes}</span>{" "}
                    </h3>
                    <h3 className="font-semibold flex gap-2 items-center">
                        <span className="text-slate-800 font-bold">
                            <FaClock />
                        </span>{" "}
                        <span>:</span> <span>{recipe?.cookingMinutes} Minutes</span>{" "}
                    </h3>
                    <h3 className="font-semibold flex gap-2 items-center">
                        <span className="text-slate-800 font-bold">
                            <FaUser />
                        </span>{" "}
                        <span>:</span> <span>{recipe?.sourceName}</span>{" "}
                    </h3>
                </div>
                <div className="w-full p-3 rounded-sm shadow space-y-3">
                    <h1 className="text-lg font-bold sm:text-xl">Ingredients</h1>
                    <ul className="w-full px-4">
                        {recipe?.extendedIngredients?.map((item, index) => (
                            <li className="list-disc" key={index}>
                                {item?.name} {item?.amount}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full p-3 rounded-sm shadow space-y-3">
                    <h1 className="text-lg font-bold sm:text-xl">Instructions</h1>
                    <div>{ReactHtmlParser(recipe?.instructions)}</div>
                </div>
            </div>
            <div className="sm:w-80 w-full p-3 rounded-sm bg-white border shadow space-y-3 ">
                <button className="w-full p-3 rounded-sm bg-slate-800 text-white flex gap-2 items-center justify-center">
                    <FaBookmark /> <span>Save Recipe</span>
                </button>
                <button className="w-full p-3 rounded-sm border flex gap-2 items-center justify-center">
                    <FaShare /> <span>Share</span>
                </button>
            </div>
        </div>
    ) 
} 

export default DetailRecipe