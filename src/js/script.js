function resh() {

    var value = document.form1.a.value;
    value = value.replace(/,/,'.');     // ������ ������� �� �����
    var a = parseFloat(value);       // �������������� ������ � �����

    var value1 = document.form1.b.value;
    value1 = value1.replace(/,/,'.');    // ������ ������� �� �����
    var b = parseFloat(value1);      // �������������� ������ � �����

    var value2 = document.form1.c.value;
    value2 = value2.replace(/,/,'.');   // ������ ������� �� �����
    var c = parseFloat(value2);      // �������������� ������ � �����

    var d = eval(Math.pow(b,2)-4*a*c)   //������������
    var n1 = eval((-b+Math.sqrt(d))/(2*a))  //d>0 ��� x1
    var n2 = eval((-b-Math.sqrt(d))/(2*a))  //d>0 ��� x2
    var n3 = eval(-b/(2*a))//d=0
    var Re = eval(-b/(2*a));
    var Im = eval(((-d)**0.5)/(2*a));
    var x1 = parseFloat(document.form1.x1.value)
    var x2 = parseFloat(document.form1.x2.value)
    
    if(isNaN(a)){
       alert("����������� a �� ����� ���� ������, ������ ������");
    }
    else if(isNaN(b)){
        alert("����������� b �� ����� ���� ������, ������ ������");
    }
    else if (isNaN(c)){
        alert("����������� c �� ����� ���� ������, ������ ������");
    }
    else if(a==0 && b==0 && c==0){
        x1 = "����� �����";
        x2 = " ";
    }
    else if(a==0 && b==0 && c!=0){
        x1 = "������� ���";
        x2 = " "; 
    }
     else if((a==0 && b!=0 && c!=0) || (a==0 && b!=0 && c==0)){
        x1 ="�� �������� ���������� ����������";
        x2 =" ";
    }
    else if(a!=0 && d>0){
        x1=eval(n1);
        x2=eval(n2);
        x1 = x1.toFixed(2);
        x2 = x2.toFixed(2);
    } 
    else if(a!=0 && d==0){
        x1=eval(n3);
        x2=" ";
        x1 = x1.toFixed(2);
    }
    else{
        if(Im==0){
            Re = Re.toFixed(1);
            x1 = `${Re}`;
            x2 = `${Re}`;
        }
        else if(Re==0){
            Im = Im.toFixed(1);
            x1 = `${Im}i`;
            x2 = `-${Im}i`; 
        }
        else{ 
            Re = Re.toFixed(1);
            Im = Im.toFixed(1);
            x1 = `${Re}+${Im}i`;
            x2 = `${Re}-${Im}i`;
        }    
    }
    document.form1.x1.value=x1;
    document.form1.x2.value=x2;
}