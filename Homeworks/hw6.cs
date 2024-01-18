public static void updateScoreCounter(int[] coordinateYVector)
        {
             
 
               for(int i = 0; i < P.Length; i++)
                {
                    if(P[i] > coordinateYVector.Min() && P[i] < coordinateYVector.Max() && coordinateYVector.Max() < securityScore)
                    {
                    scoreCounter[i] += 1;
                    }
         
                }
        }