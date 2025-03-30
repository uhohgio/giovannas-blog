--- Wordl implemented on Haskell
-- Giovanna Ehrig
import System.IO ( hSetEcho, stdin )

-- Call to the Game
wordl :: IO ()
wordl = do putStrLn "Welcome to Haskell Wordle!"
           putStrLn "Enter 'h' for instructions on how to play, otherwise:"
           putStrLn "Enter a 5-letter word: "
           word <- sgetLine
           if length word /= 5 
            then 
             if word == ['h'] || word == ['H']
              then
               do 
               -- instructions for new players (and because the console isn't super intuitive)
                putStrLn ""
                putStrLn "Instructions: "
                putStrLn ""
                putStrLn " Player 1 will enter a 5 letter word for Player 2 to guess."
                putStrLn " Player 2 will have six chances to guess Player 1's word."
                putStrLn " At each guess, Player 2 will receive feedback."
                putStrLn "  1.The correct letters will appear in the correct place if guessed correctly."
                putStrLn "  2.The correct letters will appear on the side if guessed with incorrect postioning."
                putStrLn "  3.The previously guessed words will be saved in the console for reference."
                putStrLn "  4.The remaining letters of guessed words are assumed to not be in the answer."
                putStrLn " Player 2 will win if they guess Player 1's word, otherwise Player 1 wins!"
                putStrLn ""
                wordl
                else do
                 putStrLn "not 5 letters"
                 wordl
                  else do 
                   let counter = 6
                   play word counter
               


-- Main Play Function
play :: String -> Int -> IO ()
play word counter = do putStrLn "Guess a 5-letter word: "
                       guess <- getLine
                       if length guess /= 5 
                        then 
                         do putStrLn "not 5 letters"
                            play word counter
                            else
                               if guess == word
                                 then putStrLn "You got it!"
                                  else 
                                    if counter > 0
                                        then do putStr (match2 word guess)
                                                putStrLn (", Correct Letters: " ++ match1 word guess)
                                                play word (counter-1)
                                        else putStrLn "You Lose :("


-- Helpers
--
--
-- reads a line without revealing input
sgetLine :: IO String
sgetLine = do x <- getCh
              if x == '\n' then do putChar x
                                   return []
                else do putChar '-'
                        xs <- sgetLine
                        return (x:xs)


-- reads a character without revealing input
getCh :: IO Char
getCh = do hSetEcho stdin False
           x <- getChar
           hSetEcho stdin True
           return x
                
                

-- outputs the number of times a found letter occurs in actual word
match1 :: String -> String -> String
match1 [] ys = []
match1 xs [] = []
match1 (x:xs) (y:ys) = if elem x (y:ys) then [x] ++ match1 xs (y:ys) else [] ++ match1 xs (y:ys)

-- right letter right place
match2 :: String -> String -> String
match2 [] ys = []
match2 xs [] = ['-'|x<-xs]
match2 (x:xs) (y:ys) = if (x == y) then [x] ++ match2 xs ys else ['-'] ++ match2 xs ys
                                           
                
                        
-- run the game
main = wordl