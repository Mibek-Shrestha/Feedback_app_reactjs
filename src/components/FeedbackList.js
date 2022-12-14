import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";

import FeedbackContext from "../context/FeedbackContext";
 function FeedbackList({}) {
  const {feedback, isLoading} = useContext(FeedbackContext) 
  if(!isLoading && (!feedback || feedback.length === 0)){
    return <p>No Feddback Yet</p>
   }else
   return isLoading ? (<h3>Loading ...</h3> ):(
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
   )

    
 }

 export default FeedbackList;