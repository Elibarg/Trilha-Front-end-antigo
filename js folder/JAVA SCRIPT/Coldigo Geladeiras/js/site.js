function vaildaFaleConosco()
{
    if(document.frmfaleconosco.txtnome.value=="")
    {
        alert("Preencha o campo Nome");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    if(document.frmfaleconosco.txtfone.value=="")
        {
            alert("Preencha o campo Telefone");
            document.frmfaleconosco.txtfone.focus();
            return false;
        }

        if(document.frmfaleconosco.txtemail.value=="")
            {
                alert("Preencha o campo E-mail");
                document.frmfaleconosco.txtemail.focus();
                return false;
            }

            if(document.frmfaleconosco.selmotivo.value=="")
                {
                    alert("Preencha o campo Motivo");
                    document.frmfaleconosco.selmotivo.focus();
                    return false;
                }

                if(document.frmfaleconosco.txtcomentario.value=="")
                    {
                        alert("Preencha o campo Comentário");
                        document.frmfaleconosco.txtcomentario.focus();
                        return false;
                    }
    return true
}
