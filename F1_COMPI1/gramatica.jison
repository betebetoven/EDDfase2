%{

    //codigo en JS
    //importaciones y declaraciones
    const {Declaracion} = require('../instrucciones/declaracion');
    const {Declaracion_const} = require('../instrucciones/declaracion_const');
    const {Literal} = require('../expresiones/literal')
    const {Type} = require('../symbols/type');
    const {Arithmetic} = require('../expresiones/aritmeticas');
    const {ArithmeticOption} = require('../expresiones/aritmeticOption');
    const {Bloque} = require('../instrucciones/Env')
    const {Imprimir} = require('../instrucciones/imprimir')
    var array_erroresLexicos;

%}

%lex
%options case-insensitive

number [0-9]+
cadena "\"" [^\"]* "\""
bool    "true"|"false"   


%%

\s+                   /* skip whitespace */
"//".*                // comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] // comentario multiple líneas



//expresiones regulare


{number}    return 'expreR_numero'
{cadena}    return 'expreR_cadena'
{bool}      return 'expreR_bool'




//palabras reservadas

"var"   return 'pr_var'
"let"   return 'pr_let'
"const" return 'pr_const'

"numero" return 'pr_numero'
"string" return 'pr_string'
"bool" return 'pr_bool'
"print" return 'pr_print'
"println" return 'pr_println'
"return" return 'pr_return'
"while" return 'pr_while'
"switch" return 'pr_switch'
"for" return 'pr_for'
"do" return 'pr_do'
"if" return 'pr_if'
"else" return 'pr_else'
"break" return 'pr_break'
"void" return 'pr_void'
"call" return 'pr_call'
"typeof" return 'pr_typeof'




//simbolos

";" return ';' 
"=" return '='
":" return ':' 
"+" return '+' 
"-" return '-' 
"*" return '*' 
"/" return '/' 

"{" return '{' 
"}" return '}' 
")" return ')' 
"(" return '(' 




[a-zA-ZñÑ][a-zA-Z0-9_ñÑ]*	return 'id';


<<EOF>>		            return 'EOF'

.   { 
        console.log("error lexico :"+yytext)
        //push para array errores
    }

/lex 

%left '*' '/'
%left '+' '-'

%start INIT


%%

 
 
 
//GENERAL INSTRUCCIONES 
INIT: INSTRUCCIONES    EOF {return $1} ;


INSTRUCCIONES :   INSTRUCCIONES INSTRUCCION { $1.push($2); $$=$1;}
              |   INSTRUCCION               { $$ = [$1] }
              ;


INSTRUCCION : DECLARACION   { $$=$1; } 
            | BLOQUE        { $$=$1; } 
            | IMPRIMIR      { $$=$1; } 
            | ASIGNACION    { $$=$1; }
            | METODO        { $$=$1; }
            | FUNCION       { $$=$1; }
            | CONDICIONIF   { $$=$1; } 
            | CICLO         {$$=$1;}
            | error    ';'  { console.log("Error sintactico en la linea"+(yylineno+1)); }
;
//INSTRUCCIONES CICLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOS
CICLO: 'pr_for'  '(' DECLARACION ',' COMPARACION ',' AUMENTO ')' BLOQUE {}
    | 'pr_while'  PR_CICLO BLOQUE {};


AUMENTO: ASIGNACION {}
        | E {}
;


//CONDICION IF
CONDICIONIF: 'pr_if' '(' E ')' BLOQUE 'pr_else' BLOQUE  { console.log("reconoci una sentencia if");
                                                        $$= new Sentencia_if( $3, $5,$7,@1.first_line, @1.first_column);}
;






//FUNCIONES Y METODOS CON PARAMETROS
FUNCION: TIPODATO_DECLARACION 'id' PARAMETROS BLOQUE {}
;
METODO : 'pr_void' 'id' PARAMETROS BLOQUE {}
;
PARAMETROS : '(' PARS ')' {}
;
PARS : PARS ',' PAR {}
     | PAR          {}
;
PAR : TIPODATO_DECLARACION 'id' {}
;

//INSTRUCCION IMPRIMIR UNA Y VARIAS LINEAS

IMPRIMIR : 'pr_print' '(' E ')' ';' { $$= new Imprimir($3,@1.first_line, @1.first_column);}
;

//BLOQUE DE INSTRUCCIONES
BLOQUE: '{' INSTRUCCIONES  '}'  {$$= new Bloque($2,@1.first_line, @1.first_column)}
;
//ASIGNACION DE VARIABLES YA DECLARADAS (CAMBIO DE VALOR)
ASIGNACION : 'id' '=' 'E'{}
            | 'id' = 'id'{}
            ;

//DECLARACION DE VARIABLES NO DECLARADAS SINGULAR O EN CONJUNTO, FINALES O NO FINALES, INCLUYE EXPRESIONES


TIPO_DECLARACION_CONST: 'pr_const' {$$=$1;}; 
TIPODATO_DECLARACION  :  'pr_numero' {$$=$1;}  
                       | 'pr_bool'   {$$=$1;}
                       | 'pr_string' {$$=$1;}
                       ; 

DECLARACION : TIPO_DECLARACION_CONST  TIPODATO_DECLARACION IDS '=' E ';' 
            {
                $$= new Declaracion($2,$4,$6,@1.first_line, @1.first_column );
            }
            |
            TIPODATO_DECLARACION IDS '=' E ';' 
            {   //HACER FINAL EN LA VARIABLE O HACERLO EN SUS ATRIBUTOS
                $$= new Declaracion($2,$4,$6,@1.first_line, @1.first_column );
            }
            ;
IDS : IDS ',' 'id' {}
    | 'id' {}
    ;


E: E '+' E  {$$= new Arithmetic($1,$3,ArithmeticOption.MAS, @1.first_line, @1.first_column);}
|  E '-' E  {$$= new Arithmetic($1,$3,ArithmeticOption.MENOS, @1.first_line, @1.first_column);}  
|  E '*' E  {$$= new Arithmetic($1,$3,ArithmeticOption.MULTIPLICACION, @1.first_line, @1.first_column);}
|  E '/' E  {$$= new Arithmetic($1,$3,ArithmeticOption.DIV, @1.first_line, @1.first_column);}
|  E '+''+' {}
|  E '-''-' {}
|  F    {$$=$1;}
;

F: expreR_numero   {$$=new Literal($1,Type.NUMBER , @1.first_line, @1.first_column)}
    |expreR_bool   {$$=new Literal($1,Type.BOOLEAN, @1.first_line, @1.first_column)}
    |expreR_cadena {$$=new Literal($1,Type.STRING , @1.first_line, @1.first_column)}
;
// INSSTRUCCION FOR

