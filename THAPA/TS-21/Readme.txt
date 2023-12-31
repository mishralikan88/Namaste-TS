tsc .\index.ts command generates a javascript file which we can run separately to get the desired output.

Everytime we make changes to the typescript file tsc generates javascript file that runs separately to show us output.

tsc provides a watch mode which automatically tracks the file when there is a change and it generates the javascript File automatically.This 
is called Hot module replacement. The command used is tsc .\index.ts  -w .It has one limitation it only watches a particular File given to it . 
Not the other typescript files.We have to do this every time we run the ts file.

To fix this behavior we need to generate typescript Config File. command - tsc --init.Now if we run tsc --watch or tsc -w , tsc watches 
all the ts file changes.We have to do this once .

