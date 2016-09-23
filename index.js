var recipes = {1:2};

var updateObjectWithKeyAndValue = (object,key,value) =>{
	let replacement = Object.assign({},object);
	replacement[key] = value;
	return replacement;
}

var destructivelyUpdateObjectWithKeyAndValue = (obj,key,value) => {
	obj[key] = value;
	return obj;
}

var deleteFromObjectByKey = (obj,key) => {
	let replacement = Object.assign({},obj);
	delete replacement[key];
	return obj;
}

var destructivelyDeleteFromObjectByKey = (obj,key) => {
	delete obj[key];
	return obj;
}