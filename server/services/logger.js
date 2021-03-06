import config from 'getconfig';

export function error (err, cb) {
  console.log("ERRR", err)
  if (!cb) cb = function() {}
  if (!err) return cb("No error to log");
  console.log(err);
  if (err.stack) console.log(err.stack);
}
