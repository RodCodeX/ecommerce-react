import MainLayout from '@/common/components/layouts/MainLayout'
import RoundedButton from '@/common/components/ui/buttons/RoundedButton'
import { FormHelperText, Grid2, InputLabel, Paper, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

interface ClientFormType {
    fullname: string
    email: string
    deliveryAddress: {
        address: string
        numero: number
    }
}

const PurchasePage = () => {

    const { control, handleSubmit } = useForm<ClientFormType>()

    handleSubmit((data) => {
        console.log(data);
    })

    const onSubmit = (data: ClientFormType) => {
        console.log(data);
        //Enviar al BackEnd...
    }

    return (
        <MainLayout title={'Purchase'}>
            <Paper
                component="form"
                variant='outlined'
                sx={{ p: 2 }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Grid2 container spacing={2}>
                    <Grid2 size={12}>
                        <InputLabel htmlFor={'fullname'}>
                            <Typography
                                variant='subtitle1'
                                fontWeight={'bold'}
                            >
                                Fullname
                            </Typography>
                        </InputLabel>
                        <Controller
                            name="fullname"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <TextField
                                        {...field}
                                        id="fullname"
                                        fullWidth
                                        size='small'
                                        error={!!error}
                                        placeholder='Enter your fullname'
                                    />
                                    {!!error && (
                                        <FormHelperText error>{error.message}</FormHelperText>
                                    )}
                                </>
                            )}
                            rules={{
                                required: 'Fullname is required'
                            }}
                        />
                    </Grid2>

                    <Grid2 size={{ sm: 12, md: 10 }}>
                        <InputLabel htmlFor={'address'}>
                            <Typography
                                variant='subtitle1'
                                fontWeight={'bold'}
                            >
                                Address
                            </Typography>
                        </InputLabel>
                        <Controller
                            name="deliveryAddress.address"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="address"
                                    fullWidth
                                    size='small'
                                    placeholder='Enter your address'
                                />
                            )}
                        />
                    </Grid2>

                    <Grid2 size={{ sm: 12, md: 2 }}>
                        <InputLabel htmlFor={'numero'}>
                            <Typography
                                variant='subtitle1'
                                fontWeight={'bold'}
                            >
                                Edad
                            </Typography>
                        </InputLabel>
                        <Controller
                            name="deliveryAddress.numero"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <TextField
                                        {...field}
                                        id="numero"
                                        fullWidth
                                        size='small'
                                        error={!!error}
                                        placeholder='Enter your numero'
                                    />
                                    {!!error && (
                                        <FormHelperText error>{error.message}</FormHelperText>
                                    )}
                                </>
                            )}
                            rules={{
                                required: 'Age is required',
                                min: {
                                    value: 18,
                                    message: 'Min age 18'
                                },
                                max: {
                                    value: 100,
                                    message: 'Min age 100'
                                },
                            }}
                        />
                    </Grid2>

                    <Grid2 size={12}>
                        <InputLabel htmlFor={'email'}>
                            <Typography
                                variant='subtitle1'
                                fontWeight={'bold'}
                            >
                                email
                            </Typography>
                        </InputLabel>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <TextField
                                        {...field}
                                        id="email"
                                        fullWidth
                                        size='small'
                                        error={!!error}
                                        placeholder='Enter your email'
                                    />
                                    {!!error && (
                                        <FormHelperText error>{error.message}</FormHelperText>
                                    )}
                                </>

                            )}
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Is not a email',
                                },

                            }}
                        />
                    </Grid2>

                    <Grid2 size={12}>
                        <RoundedButton
                            type='submit'
                            color="secondary"
                        >
                            Purchase
                        </RoundedButton>
                    </Grid2>
                </Grid2>

            </Paper>
        </MainLayout>
    )
}

export default PurchasePage


/**
 * ?Nota
 * El handleSubmit tienes dos funciones callbacks el primero si no se tiene ningun error el segundo se ejecuta si se tiene error de validacion
 */

// handleSubmit((data) => {
//     console.log(data);

// }, (e) => {
//     console.log(e);
// })