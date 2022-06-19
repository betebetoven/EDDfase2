/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var prueba = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,17],$V1=[1,26],$V2=[1,27],$V3=[1,28],$V4=[1,25],$V5=[1,23],$V6=[1,24],$V7=[1,29],$V8=[1,30],$V9=[1,21],$Va=[1,22],$Vb=[1,20],$Vc=[1,31],$Vd=[1,32],$Ve=[1,33],$Vf=[1,34],$Vg=[2,5,21,28,30,33,36,38,43,44,45,46,47,48,51,52,53,54],$Vh=[1,44],$Vi=[1,54],$Vj=[1,56],$Vk=[1,53],$Vl=[1,55],$Vm=[1,59],$Vn=[1,61],$Vo=[24,49],$Vp=[2,55],$Vq=[1,72],$Vr=[1,78],$Vs=[1,82],$Vt=[1,83],$Vu=[1,84],$Vv=[1,85],$Vw=[1,86],$Vx=[20,24,27,49,56,57,59,60,61,62,63,64,65,66],$Vy=[2,77],$Vz=[1,104],$VA=[1,105],$VB=[24,27,57,59],$VC=[24,27],$VD=[2,5,21,27,28,30,33,36,38,43,44,45,46,47,48,51,52,53,54],$VE=[20,24,27,49,56,57,59,60,61,64,65,66];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INIT":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"DECLARACION":7,"BLOQUE":8,"IMPRIMIR":9,"IMPRIMIRLN":10,"ASIGNACION":11,"METODO":12,"FUNCION":13,"METODOsp":14,"FUNCIONsp":15,"CONDICIONIF":16,"CICLO":17,"RETURN":18,"CALL":19,";":20,"pr_for":21,"(":22,"DECLARACION_INTERNA":23,",":24,"COMPARACIONES":25,"AUMENTO":26,")":27,"pr_while":28,"COND_WHILE":29,"pr_do":30,"expreR_bool":31,"E":32,"pr_if":33,"pr_else":34,"TIPODATO_DECLARACION":35,"id":36,"PARAMETROS":37,"pr_void":38,"PARS":39,"PAR":40,"PARAMETROSLL":41,"PARSLL":42,"pr_return":43,"pr_call":44,"pr_print":45,"pr_println":46,"{":47,"}":48,"=":49,"TIPO_DECLARACION_CONST":50,"pr_const":51,"pr_numero":52,"pr_bool":53,"pr_string":54,"IDS":55,"!":56,"&&":57,"COMP":58,"||":59,"<":60,">":61,"+":62,"-":63,"*":64,"/":65,"%":66,"F":67,"expreR_numero":68,"expreR_cadena":69,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",20:";",21:"pr_for",22:"(",24:",",27:")",28:"pr_while",30:"pr_do",31:"expreR_bool",33:"pr_if",34:"pr_else",36:"id",38:"pr_void",43:"pr_return",44:"pr_call",45:"pr_print",46:"pr_println",47:"{",48:"}",49:"=",51:"pr_const",52:"pr_numero",53:"pr_bool",54:"pr_string",56:"!",57:"&&",59:"||",60:"<",61:">",62:"+",63:"-",64:"*",65:"/",66:"%",68:"expreR_numero",69:"expreR_cadena"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,2],[17,9],[17,5],[17,7],[29,1],[29,1],[26,1],[26,1],[16,7],[16,5],[13,4],[12,4],[37,3],[39,3],[39,1],[40,2],[41,3],[42,3],[42,1],[15,5],[14,5],[18,3],[18,2],[19,4],[19,5],[9,5],[10,5],[8,3],[11,4],[11,4],[50,1],[35,1],[35,1],[35,1],[7,6],[7,5],[23,4],[55,3],[55,1],[25,2],[25,3],[25,3],[25,1],[58,3],[58,4],[58,4],[58,3],[58,4],[58,4],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,1],[67,1],[67,1],[67,1],[67,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1]
break;
case 2:
 $$[$0-1].push($$[$0]); this.$=$$[$0-1]; console.log("s ")
break;
case 3:
this.$ = [$$[$0]]; console.log("s ") 
break;
case 4:
 this.$=$$[$0];console.log("reconocio declaracion ") 
break;
case 5:
 console.log("reconocio bloque") 
break;
case 6:
 console.log("reconocio PRINT ") 
break;
case 7:
 console.log("reconocio PRINTLN ") 
break;
case 8:
 this.$=$$[$0];console.log("reconocio asignacion ") 
break;
case 9:
  console.log("reconocio metodo")
break;
case 10:
 console.log("reconocio funcion") 
break;
case 11:
  console.log("reconocio metodo sin parametros")
break;
case 12:
 console.log("reconocio funcion sin parametros") 
break;
case 13:
 console.log("reconocio condicion if") 
break;
case 14:
console.log("reconocio  ciclo")
break;
case 15:
console.log("reconocio  RETURN")
break;
case 16:
console.log("reconocio  LLAMADA")
break;
case 17:
 console.log("Error sintactico en la linea"+(yylineno+1)); 
break;
case 18:
console.log("reconocio CICLO FOR ") 
break;
case 19:
console.log("reconocio CICLO WHILE ")
break;
case 20:
console.log("reconocio CICLO DO-WHILE ")
break;
case 25:
 console.log("reconoci una sentencia if");
                                                       
break;
case 44:
console.log("reconocio BLOQUE DE INSTRUCCIONES ") 
break;
case 45: case 46:
this.$= new Asignacion($$[$0-3],$$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);
break;
case 48:
this.$=Type.NUMBER
break;
case 49:
this.$=Type.BOOLEAN
break;
case 50:
this.$=Type.STRING
break;
case 51:
this.$=new Declaracion(true,$$[$0-4], $$[$0-3],$$[$0-1], _$[$0-5].first_line, _$[$0-5].first_column)
break;
case 52:
this.$=new Declaracion(false,$$[$0-4], $$[$0-3],$$[$0-1], _$[$0-4].first_line, _$[$0-4].first_column)
break;
case 54:
$$[$0-2].push($$[$0]); this.$=$$[$0-2];
break;
case 55:
this.$ = [$$[$0]]
break;
case 56:
this.$= new Relacional(null,$$[$0],RelacionalOption.NEGACION, _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 57:
this.$= new Relacional($$[$0-2],$$[$0],RelacionalOption.AND, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 58:
this.$= new Relacional($$[$0-2],$$[$0],RelacionalOption.OR, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 59: case 73:
this.$=$$[$0];
break;
case 60:
this.$= new Relacional($$[$0-2],$$[$0],RelacionalOption.MENOR, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 61:
this.$= new Relacional($$[$0-3],$$[$0-1],RelacionalOption.MAYORIGUAL, _$[$0-3].first_line, _$[$0-3].first_column);
break;
case 62:
this.$= new Relacional($$[$0-3],$$[$0-1],RelacionalOption.MENORIGUAL, _$[$0-3].first_line, _$[$0-3].first_column);
break;
case 63:
this.$= new Relacional($$[$0-2],$$[$0],RelacionalOption.MAYOR, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 64:
this.$= new Relacional($$[$0-3],$$[$0-1],RelacionalOption.NOIGUAL, _$[$0-3].first_line, _$[$0-3].first_column);
break;
case 65:
this.$= new Relacional($$[$0-3],$$[$0-1],RelacionalOption.IGUAL, _$[$0-3].first_line, _$[$0-3].first_column);
break;
case 66:
this.$= new Arithmetic($$[$0-2],$$[$0],AritmeticOption.MAS, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 67:
this.$= new Arithmetic($$[$0-2],$$[$0],AritmeticOption.MENOS, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 68:
this.$= new Arithmetic($$[$0-2],$$[$0],AritmeticOption.MULTIPLICACION, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 69:
this.$= new Arithmetic($$[$0-2],$$[$0],AritmeticOption.DIVISION, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 70:
this.$= new Arithmetic($$[$0-2],$$[$0],AritmeticOption.MODULO, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 71:
this.$= new Arithmetic($$[$0-2],null,AritmeticOption.SOBRESUMA, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 72:
this.$= new Arithmetic($$[$0-2],null,AritmeticOption.SOBRERESTA, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 74:
this.$=new Literal($$[$0],Type.NUMBER , _$[$0].first_line, _$[$0].first_column)
break;
case 75:
this.$=new Literal($$[$0],Type.BOOLEAN, _$[$0].first_line, _$[$0].first_column)
break;
case 76:
this.$=new Literal($$[$0],Type.STRING , _$[$0].first_line, _$[$0].first_column)
break;
case 77:
this.$=new Literal($$[$0],Type.VARIABLE , _$[$0].first_line, _$[$0].first_column)
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,21:$V1,28:$V2,30:$V3,33:$V4,35:19,36:$V5,38:$V6,43:$V7,44:$V8,45:$V9,46:$Va,47:$Vb,50:18,51:$Vc,52:$Vd,53:$Ve,54:$Vf},{1:[3]},{2:$V0,5:[1,35],6:36,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,21:$V1,28:$V2,30:$V3,33:$V4,35:19,36:$V5,38:$V6,43:$V7,44:$V8,45:$V9,46:$Va,47:$Vb,50:18,51:$Vc,52:$Vd,53:$Ve,54:$Vf},o($Vg,[2,3]),o($Vg,[2,4]),o($Vg,[2,5]),o($Vg,[2,6]),o($Vg,[2,7]),o($Vg,[2,8]),o($Vg,[2,9]),o($Vg,[2,10]),o($Vg,[2,11]),o($Vg,[2,12]),o($Vg,[2,13]),o($Vg,[2,14]),o($Vg,[2,15]),o($Vg,[2,16]),{20:[1,37]},{35:38,52:$Vd,53:$Ve,54:$Vf},{36:[1,40],55:39},{2:$V0,4:41,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,21:$V1,28:$V2,30:$V3,33:$V4,35:19,36:$V5,38:$V6,43:$V7,44:$V8,45:$V9,46:$Va,47:$Vb,50:18,51:$Vc,52:$Vd,53:$Ve,54:$Vf},{22:[1,42]},{22:[1,43]},{49:$Vh},{36:[1,45]},{22:[1,46]},{22:[1,47]},{22:[1,48]},{8:49,47:$Vb},{20:[1,51],31:$Vi,32:50,36:$Vj,67:52,68:$Vk,69:$Vl},{36:[1,57]},o([52,53,54],[2,47]),{36:[2,48]},{36:[2,49]},{36:[2,50]},{1:[2,1]},o($Vg,[2,2]),o($Vg,[2,17]),{36:$Vm,55:58},{24:$Vn,49:[1,60]},o($Vo,$Vp,{37:62,22:[1,63]}),{2:$V0,6:36,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,21:$V1,28:$V2,30:$V3,33:$V4,35:19,36:$V5,38:$V6,43:$V7,44:$V8,45:$V9,46:$Va,47:$Vb,48:[1,64],50:18,51:$Vc,52:$Vd,53:$Ve,54:$Vf},{31:$Vi,32:65,36:$Vj,67:52,68:$Vk,69:$Vl},{31:$Vi,32:66,36:$Vj,67:52,68:$Vk,69:$Vl},{31:$Vi,32:67,36:[1,68],67:52,68:$Vk,69:$Vl},{22:[1,70],37:69},{25:71,31:$Vi,32:74,36:$Vj,56:$Vq,58:73,67:52,68:$Vk,69:$Vl},{23:75,35:76,52:$Vd,53:$Ve,54:$Vf},{25:79,29:77,31:$Vr,32:74,36:$Vj,56:$Vq,58:73,67:52,68:$Vk,69:$Vl},{28:[1,80]},{20:[1,81],62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw},o($Vg,[2,39]),o($Vx,[2,73]),o($Vx,[2,74]),o($Vx,[2,75]),o($Vx,[2,76]),o($Vx,$Vy),{22:[1,88],41:87},{24:$Vn,49:[1,89]},o($Vo,$Vp),{31:$Vi,32:90,36:$Vj,67:52,68:$Vk,69:$Vl},{36:[1,91]},{8:92,47:$Vb},{27:[1,93],35:96,39:94,40:95,52:$Vd,53:$Ve,54:$Vf},o([2,5,21,28,30,33,34,36,38,43,44,45,46,47,48,51,52,53,54],[2,44]),{27:[1,97],62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw},{27:[1,98],62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw},{20:[1,99],62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw},o([62,63,64,65,66],$Vy,{20:[1,100]}),{8:101,47:$Vb},{27:[1,102],35:96,39:94,40:95,52:$Vd,53:$Ve,54:$Vf},{27:[1,103],57:$Vz,59:$VA},{25:106,31:$Vi,32:74,36:$Vj,56:$Vq,58:73,67:52,68:$Vk,69:$Vl},o($VB,[2,59]),{49:[1,110],56:[1,109],60:[1,107],61:[1,108],62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw},{24:[1,111]},{36:$Vm,55:112},{27:[1,113]},o([27,49,56,60,61,62,63,64,65,66],[2,21]),{27:[2,22],57:$Vz,59:$VA},{22:[1,114]},o($Vg,[2,38]),{31:$Vi,32:115,36:$Vj,62:[1,116],67:52,68:$Vk,69:$Vl},{31:$Vi,32:117,36:$Vj,63:[1,118],67:52,68:$Vk,69:$Vl},{31:$Vi,32:119,36:$Vj,67:52,68:$Vk,69:$Vl},{31:$Vi,32:120,36:$Vj,67:52,68:$Vk,69:$Vl},{31:$Vi,32:121,36:$Vj,67:52,68:$Vk,69:$Vl},{20:[1,122]},{27:[1,123],31:$Vi,32:125,36:$Vj,42:124,67:52,68:$Vk,69:$Vl},{31:$Vi,32:126,36:$Vj,67:52,68:$Vk,69:$Vl},{20:[1,127],62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw},o($Vo,[2,54]),o($Vg,[2,27]),{8:128,47:$Vb},{24:[1,130],27:[1,129]},o($VC,[2,31]),{36:[1,131]},{20:[1,132]},{20:[1,133]},o($VD,[2,45]),o($VD,[2,46]),o($Vg,[2,28]),{8:134,47:$Vb},{8:135,47:$Vb},{31:$Vi,32:74,36:$Vj,58:136,67:52,68:$Vk,69:$Vl},{31:$Vi,32:74,36:$Vj,58:137,67:52,68:$Vk,69:$Vl},o($VC,[2,56],{57:$Vz,59:$VA}),{31:$Vi,32:138,36:$Vj,49:[1,139],67:52,68:$Vk,69:$Vl},{31:$Vi,32:141,36:$Vj,49:[1,140],67:52,68:$Vk,69:$Vl},{49:[1,142]},{49:[1,143]},{25:144,31:$Vi,32:74,36:$Vj,56:$Vq,58:73,67:52,68:$Vk,69:$Vl},{24:$Vn,49:[1,145]},{8:146,47:$Vb},{25:79,29:147,31:$Vr,32:74,36:$Vj,56:$Vq,58:73,67:52,68:$Vk,69:$Vl},o($Vx,[2,66]),o($Vx,[2,71]),o($Vx,[2,67]),o($Vx,[2,72]),o($VE,[2,68],{62:$Vs,63:$Vt}),o($VE,[2,69],{62:$Vs,63:$Vt}),o($VE,[2,70],{62:$Vs,63:$Vt}),o($Vg,[2,40]),{20:[1,148]},{24:[1,150],27:[1,149]},o($VC,[2,35],{62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw}),{20:[1,151],62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw},o($Vg,[2,52]),o($Vg,[2,36]),{47:[2,29]},{35:96,40:152,52:$Vd,53:$Ve,54:$Vf},o($VC,[2,32]),o($Vg,[2,42]),o($Vg,[2,43]),o($Vg,[2,37]),o($Vg,[2,26],{34:[1,153]}),o($VB,[2,57]),o($VB,[2,58]),o($VB,[2,60],{62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw}),{31:$Vi,32:154,36:$Vj,67:52,68:$Vk,69:$Vl},{31:$Vi,32:155,36:$Vj,67:52,68:$Vk,69:$Vl},o($VB,[2,63],{62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw}),{31:$Vi,32:156,36:$Vj,67:52,68:$Vk,69:$Vl},{31:$Vi,32:157,36:$Vj,67:52,68:$Vk,69:$Vl},{24:[1,158],57:$Vz,59:$VA},{31:$Vi,32:159,36:$Vj,67:52,68:$Vk,69:$Vl},o($Vg,[2,19]),{27:[1,160]},o($Vg,[2,41]),{20:[2,33]},{31:$Vi,32:161,36:$Vj,67:52,68:$Vk,69:$Vl},o($Vg,[2,51]),o($VC,[2,30]),{8:162,47:$Vb},o($VB,[2,62],{62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw}),o($VB,[2,61],{62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw}),o($VB,[2,64],{62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw}),o($VB,[2,65],{62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw}),{11:164,26:163,31:$Vi,32:165,36:[1,166],67:52,68:$Vk,69:$Vl},{24:[2,53],62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw},{20:[1,167]},o($VC,[2,34],{62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw}),o($Vg,[2,25]),{27:[1,168]},{27:[2,23]},{27:[2,24],62:$Vs,63:$Vt,64:$Vu,65:$Vv,66:$Vw},o([27,62,63,64,65,66],$Vy,{49:$Vh}),o($Vg,[2,20]),{8:169,47:$Vb},o($Vg,[2,18])],
defaultActions: {32:[2,48],33:[2,49],34:[2,50],35:[2,1],129:[2,29],149:[2,33],164:[2,23]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};


    //codigo en JS
    //importaciones y declaraciones
    const {Declaracion} = require('./instrucciones/declaracion.js');
    const {Asignacion} = require('./instrucciones/asignar.js');
    const {Literal} = require('./expresiones/literal.js')
    const {Type} = require('./symbols/type.js');
    const {Arithmetic} = require('./expresiones/aritmeticas.js');
    const {Acceso} = require('./expresiones/Acceso.js');
    const {AritmeticOption} = require('./expresiones/aritmeticOption.js');
    //const {Bloque} = require('./instrucciones/Env')
    //const {Imprimir} = require('./instrucciones/imprimir')
   //const {Sentencia_if} = require('./instrucciones/condicionIf')
    //const {metodo} = require('./instrucciones/metodo')
    //const {llamada} = require('./instrucciones/llamada')
    const { RelacionalOption } = require("./expresiones/relacionalOptions.js");
    const { Relacional } = require("./expresiones/relacional.js");
    var array_erroresLexicos;
   
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:// comentario simple línea
break;
case 2:// comentario multiple líneas
break;
case 3:return 68
break;
case 4:return 69
break;
case 5:return 31
break;
case 6:return 'pr_var'
break;
case 7:return 'pr_let'
break;
case 8:return 51
break;
case 9:return 52
break;
case 10:return 54
break;
case 11:return 53
break;
case 12:return 45
break;
case 13:return 46
break;
case 14:return 43
break;
case 15:return 28
break;
case 16:return 'pr_switch'
break;
case 17:return 21
break;
case 18:return 30
break;
case 19:return 33
break;
case 20:return 34
break;
case 21:return 'pr_break'
break;
case 22:return 38
break;
case 23:return 44
break;
case 24:return 'pr_typeof'
break;
case 25:return 20 
break;
case 26:return 49
break;
case 27:return ':' 
break;
case 28:return 62 
break;
case 29:return 63 
break;
case 30:return 64 
break;
case 31:return 65 
break;
case 32:return 24
break;
case 33:return 47 
break;
case 34:return 48 
break;
case 35:return 27 
break;
case 36:return 22 
break;
case 37:return 60
break;
case 38:return 61
break;
case 39:return 59
break;
case 40:return 57
break;
case 41:return '^'
break;
case 42:return 56
break;
case 43:return 66
break;
case 44:return '<='
break;
case 45:return '>='
break;
case 46:return '=='
break;
case 47:return '!='
break;
case 48:return 36;
break;
case 49:return 5
break;
case 50: 
        console.log("error lexico :"+yy_.yytext)
        //push para array errores
    
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:(-?[0-9]+))/i,/^(?:("[^\"]*"))/i,/^(?:(true|false\b))/i,/^(?:var\b)/i,/^(?:let\b)/i,/^(?:const\b)/i,/^(?:int\b)/i,/^(?:string\b)/i,/^(?:bool\b)/i,/^(?:print\b)/i,/^(?:println\b)/i,/^(?:return\b)/i,/^(?:while\b)/i,/^(?:switch\b)/i,/^(?:for\b)/i,/^(?:do\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:break\b)/i,/^(?:void\b)/i,/^(?:call\b)/i,/^(?:typeof\b)/i,/^(?:;)/i,/^(?:=)/i,/^(?::)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:,)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\))/i,/^(?:\()/i,/^(?:<)/i,/^(?:>)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:\^)/i,/^(?:!)/i,/^(?:%)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:[a-zA-ZñÑ][a-zA-Z0-9_ñÑ]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = prueba;
exports.Parser = prueba.Parser;
exports.parse = function () { return prueba.parse.apply(prueba, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}