function addTimestamp(e){
	//variables

	var startRow = 2;
	var targetColumn = 1;
	var ws = "My Data";


	//get modified row and column
	var row = e.range.getRow();
	var col = e.range.getColumn();													


	if (col === targetColumn && row >= startRow && e.source.getActiveSheet().getname() === ws){

	var currentDate = new Date();
	e.source.getActiveSheet().getRange(row,4).setValue(currentDate);
	if(e.source.getActiveSheet().getRange(row,3).getValue() == ""){
		e.source.getActiveSheet().getRange(row,3).setValue(currentDate);	
		}// end IF Check if date created exists
	}// end IF Check column, row, worksheet
}