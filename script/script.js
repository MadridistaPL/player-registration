function chkcontrol(j) {
  var total = 0;
  for (var i = 0; i < document.form.skills.length; i++) {
    if (document.form.skills[i].checked) {
      total = total + 1;
    }
    if (total > 3) {
      alert("Please Select only three");
      document.form.skills[j].checked = false;
      return false;
    }
  }
}
