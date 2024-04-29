//////////////// "Start Coding" //////////////
//////////// *Class Assignment 03*  //////////
// Nested Function !!
// 00 Main function Done
// Nested function create 01 Done
// Nested function create 02 Done
// Nested function create 03 Done
// Create A MainFunction
function mainFunction() {
    var New_Main = "Anas Hakim"; // Declear A Variable
    // Nested_function_01 Start
    function Nested_function_01() {
        console.log("Inside Nested Function 01"); // Print The Message
        console.log("\nMy Name is : ".concat(New_Main, "\n")); // Print The Message
        // Nested_function_02 Middle
        function Nested_function_02() {
            console.log("Inside Nested Function 02"); // Print The Message
            var nested_02_variable = 18; // Declear A Variable
            console.log("\nI Am ".concat(nested_02_variable, " Year Old.\n")); // Print The Message
            // Nested_function_03 End 
            function Nested_function_03() {
                console.log("Inside Nested Function 03"); // Print The Message
                var nested_03_variable = "Mango"; // Declear A Variable
                console.log("\nMy Favorite Fruit is : ".concat(nested_03_variable, "\n")); // Print The Message
            }
            // Nested_function_03 call Start
            Nested_function_03();
        }
        // Nested_function_02 call Middle
        Nested_function_02();
    }
    // Nested_function_01 Call End
    Nested_function_01();
}
// Main Function Finally Call  
mainFunction();
//////////////////////// "The End" ///////////////////////
