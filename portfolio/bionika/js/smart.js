<!-- SmartResponder.ru subscribe form code (begin) -->

<script language="javascript" type="text/javascript">

function SR_IsListSelected(el)
{
  for (var i = 0; i < el.length; i ++)
    if (el[i].selected ||
      el[i].checked)
      return i;
  return -1;
}
function SR_trim(f)
{
  return f.toString().replace(/^[ ]+/, '').replace(/[ ]+$/, '');
}
function SR_submit(f)
{
  f["field_name_first"].value = SR_trim(f["field_name_first"].value);
  f["field_phones"].value = SR_trim(f["field_phones"].value);
  f["field_email"].value = SR_trim(f["field_email"].value);
  if ((SR_focus = f["field_name_first"]) && f["field_name_first"].value.replace(/^[ ]+/, '').replace(/[ ]+$/, '').length < 1 || (SR_focus = f["field_email"]) && f["field_email"].value.replace(/^[ ]+/, '').replace(/[ ]+$/, '').length < 1) { alert("Укажите значения всех обязательных для заполнения полей (помечены звездочкой)"); SR_focus.focus(); return false; }
return true;
}

</script>