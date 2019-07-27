## caller-saved registers
%eax %edx %ecx (待确认)
当函数调用时，如果 caller 希望保存这些寄存器的值，则必须自己显示的保存在栈中； calle 可以随意覆盖这些寄存器。


## callee-saved registers
%ebx %esi %edi
callee 想覆盖这些寄存器时，需要先压入栈中，并在函数返回前从栈中回复其原值。
此外，callee 必须保存 %ebp 和 %esp



